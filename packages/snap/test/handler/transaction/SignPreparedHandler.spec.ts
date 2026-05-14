import type * as Xrpl from 'xrpl';

import type { Context } from '../../../src/core/Context';
import { TransactionDialog } from '../../../src/dialog/transaction/TransactionDialog';
import { SignPreparedHandler } from '../../../src/handler/transaction/SignPreparedHandler';
import { ProviderMock } from '../../__mocks__/core/Provider.mock';
import { WalletMock } from '../../__mocks__/core/Wallet.mock';

describe('SignPreparedHandler', () => {
  let handler: SignPreparedHandler;
  const walletMock = new WalletMock();
  const providerMock = new ProviderMock();
  const mockedContext: Context = { wallet: walletMock, provider: providerMock } as any;

  beforeEach(() => {
    handler = new SignPreparedHandler(mockedContext);
    jest.clearAllMocks();
  });

  test('signs a prepared transaction without Snap-side autofill', async () => {
    const preparedTransaction: Xrpl.Payment = {
      TransactionType: 'Payment',
      Account: 'rM9WCfJU6udpFkvKThRaFHDMsp7L8rpgN',
      Destination: 'rPzwM2JfCSDjhbesdTCqFjWWdK7eFtTwZz',
      Amount: '5000000',
      Fee: '12',
      Sequence: 21970996,
      LastLedgerSequence: 21971016,
    };
    const signedTransaction = { tx_blob: 'signed_blob', hash: 'signed_hash' };

    const mockedPrompt = jest.fn().mockResolvedValue(true);
    jest.spyOn(TransactionDialog, 'prompt').mockImplementation(mockedPrompt);
    walletMock.sign.mockReturnValue(signedTransaction);

    const result = await handler.handle('https://origin', preparedTransaction);

    expect(result).toEqual(signedTransaction);
    expect(providerMock.autofill).not.toHaveBeenCalled();
    expect(mockedPrompt).toHaveBeenCalledWith('https://origin', preparedTransaction);
    expect(walletMock.sign).toHaveBeenCalledWith(preparedTransaction);
  });
});
