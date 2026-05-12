import { InvalidParamsError, UserRejectedRequestError } from '@metamask/snaps-sdk';

import type { Context } from '../../core/Context';
import { EncryptionManager } from '../../core/utils/encryption';
import { Wallet } from '../../core/Wallet';
import { ImportWalletDialog } from '../../dialog/account/ImportWalletDialog';
import type { IHandler } from '../IHandler';

/**
 * SECURITY FIX: Replaced plaintext seed/privateKey import with BIP-39 mnemonic import.
 * Previously (VULN-002) this handler accepted raw seeds or private keys via JSON-RPC.
 * Now it requires a BIP-39 mnemonic phrase which is encrypted before storage.
 * The raw private key is never stored — wallets are derived from the encrypted mnemonic.
 */
export const ImportWalletMethod = 'xrpl_importWallet';

export class ImportWalletHandler implements IHandler<typeof ImportWalletMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: { mnemonic?: string }): Promise<{ address: string }> {
    if (!params.mnemonic) {
      throw new InvalidParamsError('BIP-39 mnemonic phrase must be provided');
    }

    // Validate BIP-39 mnemonic (word count check)
    const words = params.mnemonic.trim().split(/\s+/);
    if (words.length < 12 || words.length > 24) {
      throw new InvalidParamsError('Invalid BIP-39 mnemonic: must be 12-24 words');
    }

    let wallet: Wallet;
    try {
      wallet = Wallet.fromMnemonic(params.mnemonic);
    } catch (error) {
      if (error instanceof Error) {
        throw new InvalidParamsError(`Invalid BIP-39 mnemonic: ${error.message}`);
      }
      throw new InvalidParamsError('Invalid BIP-39 mnemonic');
    }

    // Get user confirmation
    const confirmed = await ImportWalletDialog.prompt(origin, wallet.address);
    if (!confirmed) {
      throw new UserRejectedRequestError();
    }

    // Get current state and check if wallet already exists
    const state = await this.context.stateManager.get();
    const walletExists = state.importedWallets.some((imported) => imported.address === wallet.address);
    if (walletExists) {
      throw new InvalidParamsError('Wallet already imported');
    }

    // SECURITY: Encrypt the mnemonic before storing — never store plaintext
    const encryptedMnemonic = await EncryptionManager.encryptData(params.mnemonic);

    // Add the new wallet to state with encrypted mnemonic
    await this.context.stateManager.set({
      importedWallets: [
        ...state.importedWallets,
        {
          address: wallet.address,
          publicKey: wallet.publicKey,
          encryptedMnemonic,
        },
      ],
    });

    return { address: wallet.address };
  }
}
