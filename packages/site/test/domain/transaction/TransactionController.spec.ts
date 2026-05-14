import BigNumber from 'bignumber.js';
import Amount from 'common/utils/Amount';
import TransactionController from 'domain/transaction/controller/TransactionController';

describe('TransactionController', () => {
  const signedTransaction = { tx_blob: 'signed_blob', hash: 'signed_hash' };
  const submittedTransaction = {
    result: {
      engine_result: 'tesSUCCESS',
      tx_json: {
        hash: 'submitted_hash',
      },
    },
  };

  beforeAll(() => {
    (globalThis as any).BigNumber = BigNumber;
  });

  const createController = () => {
    const metamaskRepository = {
      getWallet: jest.fn().mockResolvedValue({ account: 'rsHpCzNuoBUCBjgQvkTaw9pphC43PeTiR8' }),
      signPreparedTransaction: jest.fn().mockResolvedValue(signedTransaction),
    };
    const xrplService = {
      autofillTransaction: jest.fn().mockImplementation(async (tx) => ({ ...tx, Fee: '12', Sequence: 2750258 })),
      submitTransaction: jest.fn().mockResolvedValue(submittedTransaction),
    };
    const controller = new TransactionController(metamaskRepository as any, xrplService as any);

    return { controller, metamaskRepository, xrplService };
  };

  test('autofills and submits in the frontend while the Snap only signs the prepared transaction', async () => {
    const { controller, metamaskRepository, xrplService } = createController();
    const transaction = {
      TransactionType: 'Payment',
      Account: 'rsHpCzNuoBUCBjgQvkTaw9pphC43PeTiR8',
      Destination: 'raL2kvboRVC7Q1pm7C9VvhJuXK4M1FGwzd',
      Amount: '5000000',
    } as const;

    await expect(controller.signAndSubmitTransaction(transaction)).resolves.toBe('submitted_hash');

    expect(xrplService.autofillTransaction).toHaveBeenCalledWith(transaction);
    expect(metamaskRepository.signPreparedTransaction).toHaveBeenCalledWith({
      ...transaction,
      Fee: '12',
      Sequence: 2750258,
    });
    expect(xrplService.submitTransaction).toHaveBeenCalledWith(signedTransaction.tx_blob);
  });

  test('builds native payments before the frontend prepare/sign/submit pipeline', async () => {
    const { controller, metamaskRepository, xrplService } = createController();

    await expect(
      controller.sendXrpTransaction({
        token: {
          balance: new Amount('10000000', 6, 'XRP'),
          currency: 'XRP',
          decimals: 6,
          issuer: '',
        },
        amount: '5',
        destination: 'raL2kvboRVC7Q1pm7C9VvhJuXK4M1FGwzd',
        memo: 'hello',
      }),
    ).resolves.toBe('submitted_hash');

    expect(metamaskRepository.getWallet).toHaveBeenCalledTimes(1);
    expect(xrplService.autofillTransaction).toHaveBeenCalledWith({
      TransactionType: 'Payment',
      Account: 'rsHpCzNuoBUCBjgQvkTaw9pphC43PeTiR8',
      Destination: 'raL2kvboRVC7Q1pm7C9VvhJuXK4M1FGwzd',
      Amount: '5000000',
      Memos: [
        {
          Memo: {
            MemoData: '68656C6C6F',
          },
        },
      ],
    });
  });
});
