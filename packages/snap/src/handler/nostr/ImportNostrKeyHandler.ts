import { InvalidParamsError } from '@metamask/snaps-sdk';
import { secp256k1 } from '@noble/curves/secp256k1.js';
import { nip19, getPublicKey } from 'nostr-tools';
import { deriveAddress } from 'ripple-keypairs';

import type { Context } from '../../core/Context';
import { EncryptionManager } from '../../core/utils/encryption';
import type { IHandler } from '../IHandler';

export const ImportNostrKeyMethod = 'nostr_importPrivateKey';

/**
 * Derive a proper secp256k1 compressed public key from a 32-byte private key.
 * Uses the actual curve math to determine the correct 02/03 prefix based on y-parity.
 * @param privateKeyHex
 */
function deriveXRPLKeysFromPrivateKey(privateKeyHex: string): { publicKey: string; address: string } {
  // Convert hex to bytes
  const privateKeyBytes = Uint8Array.from(Buffer.from(privateKeyHex, 'hex'));

  // Use secp256k1 to get the COMPRESSED public key (33 bytes)
  // This correctly computes 02 (even y) or 03 (odd y) based on actual curve math
  const compressedPubKeyBytes = secp256k1.getPublicKey(privateKeyBytes, true);

  // Convert to uppercase hex for XRPL
  const xrplPublicKey = Buffer.from(compressedPubKeyBytes).toString('hex').toUpperCase();

  // Derive the XRPL address from the compressed public key
  const address = deriveAddress(xrplPublicKey);

  return { publicKey: xrplPublicKey, address };
}

export class ImportNostrKeyHandler implements IHandler<typeof ImportNostrKeyMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: { privateKey: string }): Promise<{ address: string; nostrPubkey: string }> {
    if (!params.privateKey) {
      throw new InvalidParamsError('Private key must be provided');
    }

    let hexKey = params.privateKey.trim();

    // Decode nsec if provided (Nostr bech32 format)
    if (hexKey.startsWith('nsec')) {
      try {
        const { type, data } = nip19.decode(hexKey);
        if (type === 'nsec') {
          hexKey = Buffer.from(data as Uint8Array).toString('hex');
        }
      } catch (error) {
        throw new InvalidParamsError('Invalid nsec format');
      }
    }
    // Handle XRPL hex format (00 + 64 hex chars = 66 chars)
    else if (/^00[a-fA-F0-9]{64}$/i.test(hexKey)) {
      hexKey = hexKey.slice(2); // Remove '00' prefix
    }
    // Handle 0x prefix (some tools export with this)
    else if (/^0x[a-fA-F0-9]{64}$/i.test(hexKey)) {
      hexKey = hexKey.slice(2); // Remove '0x' prefix
    }

    // Validate it's a valid 32-byte hex string
    if (!/^[a-fA-F0-9]{64}$/i.test(hexKey)) {
      throw new InvalidParamsError(
        'Invalid private key format. Supported formats:\n' +
          '- nsec (Nostr bech32)\n' +
          '- Raw hex (64 chars)\n' +
          '- XRPL hex (66 chars, starts with "00")\n' +
          '- 0x-prefixed hex (66 chars)',
      );
    }

    // Normalize to lowercase for consistency
    hexKey = hexKey.toLowerCase();

    // Derive Nostr public key (Schnorr x-only format, 32 bytes)
    const nostrPubkey = getPublicKey(hexKey);

    // Derive XRPL compressed public key and address
    const { publicKey: xrplPublicKey, address: xrplAddress } = deriveXRPLKeysFromPrivateKey(hexKey);

    // Get current state first to check for duplicates
    const state = await this.context.stateManager.get();

    // Check if this wallet address already exists in imported wallets
    // (regardless of how it was originally imported - seed, hex, or nsec)
    const existsInImported = state.importedWallets.some((w) => w.address === xrplAddress);
    if (existsInImported) {
      // If it already exists but doesn't have encryptedNostrKey, we could update it
      // For now, just inform the user it's already imported
      throw new InvalidParamsError('This identity is already imported. The same private key produces the same wallet address.');
    }

    // Check if this matches the derived wallet (MetaMask-derived)
    if (this.context.derivedWallet.address === xrplAddress) {
      throw new InvalidParamsError(
        'This identity matches your MetaMask-derived wallet. No import needed - your derived wallet already supports Nostr.',
      );
    }

    // Encrypt the raw Nostr key
    const encryptedNostrKey = await EncryptionManager.encryptData(hexKey);

    // Store the wallet with both the encrypted Nostr key and necessary info
    await this.context.stateManager.set({
      importedWallets: [
        ...state.importedWallets,
        {
          address: xrplAddress,
          publicKey: xrplPublicKey,
          encryptedSeed: encryptedNostrKey, // Store encrypted key for compatibility
          encryptedNostrKey, // Also store explicitly to mark as Nostr-imported
        },
      ],
      activeImportedWallet: xrplAddress,
    });

    return { address: xrplAddress, nostrPubkey };
  }
}
