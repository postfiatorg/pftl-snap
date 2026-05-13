import { NetworkChainId } from 'common/models/network/network.types';
import useGetActiveNetwork from 'ui/network/query/useGetActiveNetwork';

import { useBlockchainAddressUrl } from '../../../src/ui/network/hooks/useBlockchainAddressUrl';
import { renderHook } from '../utils/test-utils';

jest.mock('ui/network/query/useGetActiveNetwork', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('useBlockchainAddressUrl', () => {
  const address = 'rPFTLExplorerAddress';
  const txHash = 'ABC123';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test.each([
    ['address', address, 'https://explorer.testnet.postfiat.org/accounts/rPFTLExplorerAddress'],
    ['tx', txHash, 'https://explorer.testnet.postfiat.org/transactions/ABC123'],
  ] as const)('routes PFTL testnet %s links to the PostFiat explorer', (type, value, expectedUrl) => {
    (useGetActiveNetwork as jest.Mock).mockReturnValue({
      data: {
        chainId: NetworkChainId.PFTL_TESTNET,
      },
    });

    const { result } = renderHook(() => useBlockchainAddressUrl(type, value));

    expect(result.current).toBe(expectedUrl);
  });

  test('preserves XRPL testnet address links', () => {
    (useGetActiveNetwork as jest.Mock).mockReturnValue({
      data: {
        chainId: NetworkChainId.TESTNET,
      },
    });

    const { result } = renderHook(() => useBlockchainAddressUrl('address', address));

    expect(result.current).toBe('https://testnet.xrpl.org/accounts/rPFTLExplorerAddress');
  });
});
