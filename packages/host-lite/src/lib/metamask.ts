export type EthereumProvider = {
  isMetaMask?: boolean;
  providers?: EthereumProvider[];
  detected?: EthereumProvider[];
  request: (args: { method: string; params?: unknown }) => Promise<unknown>;
};

export const getProvider = (): EthereumProvider | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const ethereum = (window as unknown as { ethereum?: EthereumProvider }).ethereum;
  if (!ethereum) {
    return null;
  }

  if (ethereum.providers?.length) {
    return ethereum.providers.find((provider) => provider.isMetaMask) || ethereum.providers[0] || null;
  }

  if (ethereum.detected?.length) {
    return ethereum.detected.find((provider) => provider.isMetaMask) || ethereum.detected[0] || null;
  }

  return ethereum;
};

export const getSnaps = async (provider: EthereumProvider): Promise<Record<string, { version: string }>> => {
  return (await provider.request({ method: 'wallet_getSnaps' })) as Record<string, { version: string }>;
};

export const requestSnap = async (provider: EthereumProvider, snapId: string): Promise<void> => {
  await provider.request({
    method: 'wallet_requestSnaps',
    params: {
      [snapId]: {},
    },
  });
};

export const invokeSnap = async <T>(
  provider: EthereumProvider,
  snapId: string,
  method: string,
  params?: unknown,
): Promise<T> => {
  return (await provider.request({
    method: 'wallet_invokeSnap',
    params: {
      snapId,
      request: {
        method,
        params,
      },
    },
  })) as T;
};
