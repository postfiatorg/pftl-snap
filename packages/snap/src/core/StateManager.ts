export type Network = {
  chainId: number;
  name: string;
  nodeUrl: string;
  explorerUrl?: string;
};

export type ImportedWallet = {
  address: string;
  publicKey: string;
  encryptedSeed: string;
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
    chainId: 0,
    name: 'XRPL Mainnet',
    nodeUrl: 'wss://xrplcluster.com',
    explorerUrl: 'https://livenet.xrpl.org',
  },
  {
    chainId: 1,
    name: 'XRPL Testnet',
    nodeUrl: 'wss://testnet.xrpl-labs.com',
    explorerUrl: 'https://testnet.xrpl.org',
  },
  {
    chainId: 2,
    name: 'XRPL Devnet',
    nodeUrl: 'wss://s.devnet.rippletest.net:51233',
    explorerUrl: 'https://devnet.xrpl.org',
  },
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
    })) as State;

    if (!storedState) {
      return DEFAULT_STATE;
    }

    this.currentState = storedState;
    return storedState;
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
