import { NetworkChainId } from 'common/models';
import { config } from 'common/config';
import RepositoryError from 'data-access/repository/error/RepositoryError';
import { FundErrorCodes } from 'data-access/repository/xrpl/FundErrorCodes';
import { FundRepository } from 'data-access/repository/xrpl/FundRepository';

describe('FundRepository', () => {
  const destination = 'rPFTLTestDestination';
  const xrpAmount = '110';
  const transactionHash = 'ABC123';

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      headers: {
        get: jest.fn().mockReturnValue('application/json'),
      },
      json: jest.fn().mockResolvedValue({ transactionHash }),
    }) as jest.Mock;
  });

  test.each([
    [NetworkChainId.TESTNET, config.faucet.testnetUrl],
    [NetworkChainId.DEVNET, config.faucet.devnetUrl],
    [NetworkChainId.PFTL_TESTNET, config.faucet.pftlTestnetUrl],
  ])('funds supported network %s through its configured HTTPS funding host', async (chainId, hostname) => {
    const repository = new FundRepository();

    await expect(repository.fundWallet({ chainId, destination, xrpAmount })).resolves.toBe(transactionHash);
    expect(global.fetch).toHaveBeenCalledWith(`https://${hostname}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        destination,
        xrpAmount,
        userAgent: 'xrpl-snap',
      }),
    });
  });

  test('rejects unsupported funding networks', async () => {
    const repository = new FundRepository();

    await expect(
      repository.fundWallet({
        chainId: NetworkChainId.MAINNET,
        destination,
        xrpAmount,
      }),
    ).rejects.toThrow(new RepositoryError(FundErrorCodes.CHAIN_NOT_SUPPORTED));
    expect(global.fetch).not.toHaveBeenCalled();
  });
});
