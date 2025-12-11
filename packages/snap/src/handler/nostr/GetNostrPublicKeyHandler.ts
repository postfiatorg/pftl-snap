import { getPublicKey } from 'nostr-tools';
import { deriveKeypair } from 'ripple-keypairs';

import type { Context } from '../../core/Context';
import { EncryptionManager } from '../../core/utils/encryption';
import type { IHandler } from '../IHandler';

export const GetNostrPublicKeyMethod = 'nostr_getPublicKey';

/**
 * Extract the raw 32-byte private key from various formats:
 * - Family seed (s...) → derive keypair, extract private key
 * - XRPL hex (00 + 64 chars) → strip 00 prefix
 * - Raw hex (64 chars) → use directly
 * - 0x-prefixed hex → strip prefix
 * @param keyInput
 */
function extractRawPrivateKey(keyInput: string): string {
  const trimmed = keyInput.trim();

  // Family seed format (s...) - need to derive the keypair
  if (trimmed.startsWith('s') && trimmed.length >= 20 && trimmed.length <= 40) {
    try {
      const keypair = deriveKeypair(trimmed);
      // keypair.privateKey is "00" + 64-char hex
      return keypair.privateKey.slice(2).toLowerCase();
    } catch {
      // Not a valid seed, continue to other checks
    }
  }

  // Remove 0x prefix if present
  let key = trimmed.startsWith('0x') ? trimmed.slice(2) : trimmed;

  // Remove 00 prefix if present (XRPL format - 66 chars)
  if (key.startsWith('00') && key.length === 66) {
    key = key.slice(2);
  }

  return key.toLowerCase();
}

export class GetNostrPublicKeyHandler implements IHandler<typeof GetNostrPublicKeyMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: void): Promise<string> {
    const state = await this.context.stateManager.get();

    let hexKey: string;

    // First, check if there's an active imported wallet with a Nostr key
    const activeImportedAddress = state.activeImportedWallet;
    if (activeImportedAddress) {
      const importedWallet = state.importedWallets.find((w) => w.address === activeImportedAddress);
      if (importedWallet) {
        const encryptedKey = importedWallet.encryptedNostrKey || importedWallet.encryptedSeed;
        if (encryptedKey) {
          const decryptedKey = await EncryptionManager.decryptData(encryptedKey);
          // Check if it's a valid 32-byte hex key
          if (/^[a-fA-F0-9]{64}$/.test(decryptedKey)) {
            hexKey = decryptedKey.toLowerCase();
          } else {
            // It might be an XRPL-formatted key, try to extract raw key
            hexKey = extractRawPrivateKey(decryptedKey);
          }
        }
      }
    }

    // If no imported key, use the derived wallet's private key
    if (!hexKey!) {
      const { wallet } = this.context;
      if (!wallet) {
        throw new Error('No wallet available. Please connect or import a key.');
      }
      // The derived wallet's privateKey is in XRPL format (00 + 32 bytes)
      hexKey = extractRawPrivateKey(wallet.privateKey);
    }

    // Validate it's a proper 32-byte hex key
    if (!/^[a-fA-F0-9]{64}$/.test(hexKey)) {
      throw new Error('Invalid private key format');
    }

    // Derive Nostr public key (Schnorr x-only format)
    const pubkey = getPublicKey(hexKey);
    return typeof pubkey === 'string' ? pubkey : Buffer.from(pubkey).toString('hex');
  }
}
