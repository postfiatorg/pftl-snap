import { InvalidParamsError, UserRejectedRequestError } from '@metamask/snaps-sdk';

import type { Context } from '../../core/Context';
import { EncryptionManager } from '../../core/utils/encryption';
import { Wallet } from '../../core/Wallet';
import { ImportWalletDialog } from '../../dialog/account/ImportWalletDialog';
import type { IHandler } from '../IHandler';

export const ImportWalletMethod = 'xrpl_importWallet';

/**
 * Determines the key format and normalizes it for wallet creation.
 * Supports:
 * - Family seed: starts with 's' (e.g., 'sEdVJv...')
 * - XRPL hex: 66 chars starting with '00' (e.g., '00abc123...')
 * - Raw hex: 64 chars (e.g., 'abc123...')
 * @param input
 */
function parseKeyInput(input: string): { type: 'seed' | 'hex'; value: string } {
  const trimmed = input.trim();

  // Family seed format
  if (trimmed.startsWith('s') && trimmed.length >= 20 && trimmed.length <= 40) {
    return { type: 'seed', value: trimmed };
  }

  // XRPL hex format: 00 + 64 hex chars = 66 chars
  if (/^00[a-fA-F0-9]{64}$/i.test(trimmed)) {
    // Extract the raw 64-char hex (remove '00' prefix)
    return { type: 'hex', value: trimmed.slice(2).toLowerCase() };
  }

  // Raw hex format: 64 hex chars
  if (/^[a-fA-F0-9]{64}$/i.test(trimmed)) {
    return { type: 'hex', value: trimmed.toLowerCase() };
  }

  // Try as seed anyway (user might have non-standard format)
  return { type: 'seed', value: trimmed.startsWith('s') ? trimmed : `s${trimmed}` };
}

export class ImportWalletHandler implements IHandler<typeof ImportWalletMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: { privateKey?: string; seed?: string }): Promise<{ address: string }> {
    const keyInput = params.seed || params.privateKey;
    if (!keyInput) {
      throw new InvalidParamsError('Private key or family seed must be provided');
    }

    const { type, value } = parseKeyInput(keyInput);

    let wallet: Wallet;
    let keyToStore: string;

    try {
      if (type === 'hex') {
        // Use raw hex method for proper secp256k1 derivation
        wallet = Wallet.fromRawHex(value);
        keyToStore = value; // Store raw hex
      } else {
        // Use family seed method
        wallet = Wallet.fromSeed(value);
        keyToStore = value; // Store family seed
      }
    } catch (error) {
      throw new InvalidParamsError(
        `Invalid key format. Supported formats:\n` +
          `- Family seed (starts with 's')\n` +
          `- XRPL hex (66 chars, starts with '00')\n` +
          `- Raw hex (64 chars)`,
      );
    }

    // Get user confirmation
    const confirmed = await ImportWalletDialog.prompt(origin, wallet.address);
    if (!confirmed) {
      throw new UserRejectedRequestError();
    }

    // Get current state
    const state = await this.context.stateManager.get();

    // Check if wallet already exists in imported wallets
    const existsInImported = state.importedWallets.some((w) => w.address === wallet.address);
    if (existsInImported) {
      throw new InvalidParamsError('This wallet is already imported');
    }

    // Check if this matches the derived wallet (MetaMask-derived)
    if (this.context.derivedWallet.address === wallet.address) {
      throw new InvalidParamsError('This wallet matches your MetaMask-derived wallet. No import needed.');
    }

    // Encrypt the key before storing
    const encryptedSeed = await EncryptionManager.encryptData(keyToStore);

    // For hex imports, also store as encryptedNostrKey for Nostr compatibility
    const encryptedNostrKey = type === 'hex' ? encryptedSeed : undefined;

    // Add the new wallet to state
    await this.context.stateManager.set({
      importedWallets: [
        ...state.importedWallets,
        {
          address: wallet.address,
          publicKey: wallet.publicKey,
          encryptedSeed,
          encryptedNostrKey, // Mark as Nostr-compatible if imported via hex
        },
      ],
    });

    return { address: wallet.address };
  }
}
