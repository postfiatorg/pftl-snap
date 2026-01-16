/* eslint-disable no-restricted-globals */
import { InternalError } from '@metamask/snaps-sdk';
import type { Request as XrplRequest, SubmittableTransaction } from 'xrpl';

import { Provider } from '../../src/core/Provider';
import { RPCClient } from '../../src/core/rpc-client/RpcClient';

describe('Provider', () => {
  const uri = 'wss://rpc.testnet.postfiat.org:6007';
  let provider: Provider;

  beforeEach(() => {
    provider = new Provider(uri);
    jest.clearAllMocks();
  });

  describe('Autofill', () => {
    test('Autofills a transaction with the fee and the sequence number', async () => {
      const mockedResponse = {
        result: {
          drops: {
            open_ledger_fee: 12,
          },
          account_data: {
            Sequence: 1,
          },
        },
      };
      const autoFillMock = jest.fn().mockResolvedValue(mockedResponse as unknown as SubmittableTransaction);
      jest.spyOn(RPCClient.prototype, 'autofill').mockImplementation(autoFillMock);

      const mockedTransaction = {};

      const res = await provider.autofill(mockedTransaction as SubmittableTransaction);

      expect(res).toEqual(mockedResponse);
      expect(autoFillMock).toHaveBeenCalledWith(mockedTransaction);
    });

    test('Throws an error if the request fails', async () => {
      jest.spyOn(RPCClient.prototype, 'autofill').mockImplementation(() => {
        throw new Error('error');
      });

      await expect(provider.autofill({} as SubmittableTransaction)).rejects.toThrow(InternalError);
    });
  });

  describe('Request', () => {
    const req: XrplRequest = {
      command: 'account_info',
      account: 'rEXAMPLE',
    };
    test('Should make a request an return a response', async () => {
      const mockedResponse = { result: 'result' };
      jest.spyOn(RPCClient.prototype, 'request').mockResolvedValue(mockedResponse as any);

      const res = await provider.request(req);

      expect(res).toEqual(mockedResponse);
      expect(RPCClient.prototype.request).toHaveBeenCalledWith(req);
    });

    test('Should throw an error if the request fails', async () => {
      jest.spyOn(RPCClient.prototype, 'request').mockRejectedValue(new Error('boom'));

      await expect(provider.request(req)).rejects.toThrow(new InternalError('boom'));
    });
  });

  describe('Changes node correctly', () => {
    test('Changes the node correctly', async () => {
      expect(provider.node).toEqual(uri);
      jest.spyOn(RPCClient.prototype, 'changeNode').mockResolvedValue(undefined);
      const newNode = 'wss://rpc.testnet.postfiat.org:6007/';
      await provider.changeNode(newNode);
      expect(provider.node).toEqual(newNode);
    });
  });
});
