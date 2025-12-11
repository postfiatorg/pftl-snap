import { Provider } from './Provider';
import type { ImportedWallet } from './StateManager';
import { StateManager } from './StateManager';
import { EncryptionManager } from './utils/encryption';
import { Wallet } from './Wallet';

export class Context {
  private readonly _wallet: Wallet;
  private _activeImportedWallet?: Wallet;

  constructor(
    public readonly stateManager: StateManager,
    public readonly provider: Provider,
    derivedWallet: Wallet
  ) {
    this._wallet = derivedWallet;
  }

  get wallet(): Wallet {
    // Return the active imported wallet if it exists, otherwise return the derived wallet
    return this._activeImportedWallet ?? this._wallet;
  }

  get derivedWallet(): Wallet {
    // Always return the derived wallet
    return this._wallet;
  }

  /**
   * Create a wallet from an imported wallet entry, handling both XRPL seeds and Nostr keys
   */
  private static async createWalletFromImported(importedWallet: ImportedWallet): Promise<Wallet> {
    // Check if this is a Nostr-imported wallet (has encryptedNostrKey)
    if (importedWallet.encryptedNostrKey) {
      const nostrKey = await EncryptionManager.decryptData(importedWallet.encryptedNostrKey);
      // Create wallet using the stored address and public key
      return Wallet.fromNostrKey(nostrKey, importedWallet.address, importedWallet.publicKey);
    }

    // Regular XRPL seed import
    const decryptedSeed = await EncryptionManager.decryptData(importedWallet.encryptedSeed);
    return Wallet.fromPrivateKey(decryptedSeed);
  }

  static async init(): Promise<Context> {
    const stateManager = new StateManager();
    const state = await stateManager.get();
    const provider = new Provider(state.activeNetwork.nodeUrl);
    const derivedWallet = await Wallet.derive();

    const context = new Context(stateManager, provider, derivedWallet);
    
    // Store the derived wallet address in state for consistent rehydration
    if (!state.derivedWalletAddress || state.derivedWalletAddress !== derivedWallet.address) {
      await stateManager.set({ derivedWalletAddress: derivedWallet.address });
    }

    // If there's an active imported wallet, initialize it
    if (state.activeImportedWallet) {
      const importedWallet = state.importedWallets.find(
        (w) => w.address === state.activeImportedWallet
      );
      if (importedWallet) {
        try {
          context._activeImportedWallet = await Context.createWalletFromImported(importedWallet);
        } catch (error) {
          // Don't throw, just continue without the imported wallet
          console.error('Failed to restore imported wallet:', error);
          // Clear the active imported wallet reference in state since we couldn't load it
          await stateManager.set({ activeImportedWallet: undefined });
        }
      } else {
        // If the imported wallet is not found, clear the reference
        await stateManager.set({ activeImportedWallet: undefined });
      }
    }

    return context;
  }

  async updateActiveWallet(address?: string): Promise<void> {
    if (!address) {
      // Switch to derived wallet
      this._activeImportedWallet = undefined;
      
      // Update state to explicitly clear the active imported wallet reference
      // and ensure we're tracking the derived wallet address
      const derivedAddress = this.derivedWallet.address;
      await this.stateManager.set({ 
        activeImportedWallet: undefined,
        derivedWalletAddress: derivedAddress 
      });
      return;
    }

    // Check if this is the derived wallet address
    if (address === this.derivedWallet.address) {
      // Switch to derived wallet 
      this._activeImportedWallet = undefined;
      await this.stateManager.set({ 
        activeImportedWallet: undefined,
        derivedWalletAddress: address 
      });
      return;
    }

    try {
      const state = await this.stateManager.get();
      const importedWallet = state.importedWallets.find((w) => w.address === address);
      if (!importedWallet) {
        throw new Error(`Wallet not found for address: ${address}`);
      }

      // Create wallet using the appropriate method based on wallet type
      const newWallet = await Context.createWalletFromImported(importedWallet);

      // Verify that the created wallet matches the expected address
      if (newWallet.address !== address) {
        throw new Error(`Address mismatch: expected ${address}, got ${newWallet.address}`);
      }

      this._activeImportedWallet = newWallet;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to activate wallet: ${error.message}`);
      } else {
        throw new Error('Failed to activate wallet: Unknown error');
      }
    }
  }
}
