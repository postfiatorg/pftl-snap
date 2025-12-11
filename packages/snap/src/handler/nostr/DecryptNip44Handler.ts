import { InvalidParamsError } from '@metamask/snaps-sdk';
import * as nip44 from 'nostr-tools/nip44';
import { deriveKeypair } from 'ripple-keypairs';

import type { Context } from '../../core/Context';
import { EncryptionManager } from '../../core/utils/encryption';
import type { IHandler } from '../IHandler';

export const DecryptNip44Method = 'nostr_nip44Decrypt';

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

export class DecryptNip44Handler implements IHandler<typeof DecryptNip44Method> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: { pubkey: string; ciphertext: string }): Promise<string> {
    if (!params.pubkey || !params.ciphertext) {
      throw new InvalidParamsError('pubkey and ciphertext are required');
    }

    const state = await this.context.stateManager.get();

    let hexKey: string;

    // Get the private key
    const activeImportedAddress = state.activeImportedWallet;
    if (activeImportedAddress) {
      const importedWallet = state.importedWallets.find((w) => w.address === activeImportedAddress);
      if (importedWallet) {
        const encryptedKey = importedWallet.encryptedNostrKey || importedWallet.encryptedSeed;
        if (encryptedKey) {
          const decryptedKey = await EncryptionManager.decryptData(encryptedKey);
          if (/^[a-fA-F0-9]{64}$/.test(decryptedKey)) {
            hexKey = decryptedKey.toLowerCase();
          } else {
            hexKey = extractRawPrivateKey(decryptedKey);
          }
        }
      }
    }

    if (!hexKey!) {
      const { wallet } = this.context;
      if (!wallet) {
        throw new InvalidParamsError('No wallet available');
      }
      hexKey = extractRawPrivateKey(wallet.privateKey);
    }

    if (!/^[a-fA-F0-9]{64}$/.test(hexKey)) {
      throw new InvalidParamsError('Invalid private key format');
    }

    // Convert to Uint8Array
    const sk = Uint8Array.from(Buffer.from(hexKey, 'hex'));
    const senderPubkey = params.pubkey;

    // Get conversation key for NIP-44 decryption
    const conversationKey = nip44.v2.utils.getConversationKey(sk, senderPubkey);

    // Decrypt the ciphertext
    const plaintext = nip44.v2.decrypt(params.ciphertext, conversationKey);

    return plaintext;
  }
}
