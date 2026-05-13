import { NetworkChainId } from 'common/models';
import useNetworkReserve from 'ui/network/hooks/useNetworkReserve';
import useGetActiveNetwork from 'ui/network/query/useGetActiveNetwork';
import ActivateAccountCTA from 'ui/wallet/containers/ActivateAccountCTA/ActivateAccountCTA';
import useFundWallet from 'ui/wallet/query/useFundWallet';

import { fireEvent, render, screen } from '../utils/test-utils';

jest.mock('ui/fiat-orders/transak/containers/OnRampModal', () => ({
  __esModule: true,
  default: () => null,
}));
jest.mock('ui/network/hooks/useNetworkReserve', () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock('ui/network/query/useGetActiveNetwork', () => ({
  __esModule: true,
  default: jest.fn(),
}));
jest.mock('ui/wallet/query/useFundWallet', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ActivateAccountCTA', () => {
  const mutate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useNetworkReserve as jest.Mock).mockReturnValue({
      data: {
        baseReserveCostInXrp: '10',
      },
    });
    (useFundWallet as jest.Mock).mockReturnValue({
      mutate,
      isPending: false,
    });
  });

  test('offers faucet activation on PFTL testnet', () => {
    (useGetActiveNetwork as jest.Mock).mockReturnValue({
      data: {
        chainId: NetworkChainId.PFTL_TESTNET,
      },
    });

    render(<ActivateAccountCTA />);
    fireEvent.click(screen.getByRole('button', { name: 'Fund from faucet' }));

    expect(mutate).toHaveBeenCalledTimes(1);
  });
});
