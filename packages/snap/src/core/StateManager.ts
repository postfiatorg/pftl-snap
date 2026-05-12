export type Network = {
  chainId: number;
  name: string;
  nodeUrl: string;
  explorerUrl?: string;
};

/**
 * SECURITY: Imported wallet type now stores an encrypted BIP-39 mnemonic
 * instead of a raw private key or seed. The mnemonic is encrypted using
 * AES-256-GCM with a key derived from snap_getEntropy.
 */
export type ImportedWallet = {
  address: string;
  publicKey: string;
  /** Encrypted BIP-39 mnemonic phrase — decrypted only when needed to derive the wallet. */
  encryptedMnemonic: string;
};

export type State = {
  networks: Network[];
  activeNetwork: Network;
  importedWallets: ImportedWallet[];
  activeImportedWallet?: string;
  derivedWalletAddress?: string;
};

/**
 * NetworkID: https://xrpl.org/docs/references/protocol/transactions/common-fields/#networkid-field
 */
export const DEFAULT_NETWORKS: Network[] = [
  {
    chainId: 2025,
    name: 'PFTL Testnet',
    nodeUrl: 'wss://rpc.testnet.postfiat.org:6007',
    explorerUrl: 'https://explorer.testnet.postfiat.org',
  },
];

export const DEFAULT_STATE: State = {
  networks: DEFAULT_NETWORKS,
  activeNetwork: DEFAULT_NETWORKS[0] as Network,
  importedWallets: [],
  activeImportedWallet: undefined,
  derivedWalletAddress: undefined,
};

export class StateManager {
  currentState: State | undefined;

  async get(): Promise<State> {
    if (this.currentState) {
      return this.currentState;
    }

    const storedState = (await snap.request({
      method: 'snap_manageState',
      params: { operation: 'get' },
    })) as Partial<State> | null;

    if (!storedState) {
      return DEFAULT_STATE;
    }

    // Force PFTL-only networks and active network to avoid accidental XRPL connections.
    const normalizedState: State = {
      ...DEFAULT_STATE,
      ...storedState,
      networks: DEFAULT_NETWORKS,
      activeNetwork: DEFAULT_NETWORKS[0] as Network,
    };

    this.currentState = normalizedState;
    return normalizedState;
  }

  async set(newState: Partial<State>): Promise<void> {
    const state = await this.get();
    await snap.request({
      method: 'snap_manageState',
      params: {
        operation: 'update',
        newState: {
          ...state,
          ...newState,
        },
      },
    });
  }
}
