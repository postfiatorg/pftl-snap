import { InvalidParamsError } from '@metamask/snaps-sdk';
import { nip19 } from 'nostr-tools';

import type { Context } from '../../core/Context';
import { EncryptionManager } from '../../core/utils/encryption';
import { Wallet } from '../../core/Wallet';
import type { IHandler } from '../IHandler';

export const ImportNostrKeyMethod = 'nostr_importPrivateKey';

export class ImportNostrKeyHandler implements IHandler<typeof ImportNostrKeyMethod> {
  constructor(protected readonly context: Context) {}

  async handle(origin: string, params: { privateKey: string }): Promise<{ address: string }> {
    if (!params.privateKey) {
      throw new InvalidParamsError('Private key must be provided');
    }

    let hexKey = params.privateKey;
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

    let wallet: Wallet;
    try {
      // Use fromPrivateKey which supports raw hex
      wallet = Wallet.fromPrivateKey(hexKey);
    } catch (error) {
      throw new InvalidParamsError('Invalid private key format');
    }

    // Encrypt raw key (not seed)
    const encryptedSeed = await EncryptionManager.encryptData(hexKey);

    const state = await this.context.stateManager.get();
    const walletExists = state.importedWallets.some((w) => w.address === wallet.address);
    if (walletExists) {
      // If it exists, just return the address (idempotent) or throw?
      // Existing handler throws. I'll throw to be consistent.
      throw new InvalidParamsError('Wallet already imported');
    }

    await this.context.stateManager.set({
      importedWallets: [
        ...state.importedWallets,
        {
          address: wallet.address,
          publicKey: wallet.publicKey,
          encryptedSeed,
        },
      ],
      // Automatically switch to the imported wallet as it's the intended identity
      activeImportedWallet: wallet.address,
    });

    // Update context active wallet immediately for subsequent calls in same session
    await this.context.updateActiveWallet(wallet.address);

    return { address: wallet.address };
  }
}

