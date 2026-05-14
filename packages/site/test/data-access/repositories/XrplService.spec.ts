import { NetworkChainId } from 'common/models';
import { XrplService } from 'data-access/repository/xrpl/XrplService';
import { Client } from 'xrpl';
import type * as XrplModule from 'xrpl';

jest.mock('xrpl', () => {
  const actual = jest.requireActual<typeof XrplModule>('xrpl');
  return {
    ...actual,
    Client: jest.fn(),
  };
});

describe('XrplService', () => {
  const clientMock = {
    autofill: jest.fn(),
    connect: jest.fn().mockResolvedValue(undefined),
    disconnect: jest.fn().mockResolvedValue(undefined),
    isConnected: jest.fn().mockReturnValue(true),
    request: jest.fn().mockResolvedValue({}),
    submit: jest.fn(),
  };

  const payment = {
    TransactionType: 'Payment',
    Account: 'rsHpCzNuoBUCBjgQvkTaw9pphC43PeTiR8',
    Destination: 'raL2kvboRVC7Q1pm7C9VvhJuXK4M1FGwzd',
    Amount: '5000000',
  } as const;

  beforeEach(() => {
    jest.clearAllMocks();
    (Client as unknown as jest.Mock).mockImplementation(() => clientMock);
    clientMock.autofill.mockResolvedValue({
      ...payment,
      Fee: '12',
      Sequence: 2750258,
    });
  });

  test('adds the active PFTL testnet NetworkID after frontend autofill', async () => {
    const service = new XrplService();
    await service.load('wss://ws.testnet.postfiat.org', NetworkChainId.PFTL_TESTNET);

    await expect(service.autofillTransaction(payment)).resolves.toEqual({
      ...payment,
      Fee: '12',
      NetworkID: NetworkChainId.PFTL_TESTNET,
      Sequence: 2750258,
    });
  });

  test('does not add NetworkID for legacy XRPL networks', async () => {
    const service = new XrplService();
    await service.load('wss://s.altnet.rippletest.net:51233', NetworkChainId.TESTNET);

    await expect(service.autofillTransaction(payment)).resolves.toEqual({
      ...payment,
      Fee: '12',
      Sequence: 2750258,
    });
  });

  test('preserves an explicitly prepared NetworkID', async () => {
    clientMock.autofill.mockResolvedValue({
      ...payment,
      Fee: '12',
      NetworkID: NetworkChainId.PFTL_TESTNET,
      Sequence: 2750258,
    });
    const service = new XrplService();
    await service.load('wss://ws.testnet.postfiat.org', NetworkChainId.PFTL_TESTNET);

    await expect(service.autofillTransaction(payment)).resolves.toEqual({
      ...payment,
      Fee: '12',
      NetworkID: NetworkChainId.PFTL_TESTNET,
      Sequence: 2750258,
    });
  });
});
