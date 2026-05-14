import { Client } from 'xrpl';
import type * as XrplModule from 'xrpl';

import { PFTL_TESTNET_WS_URL } from '../../src/core/network';
import { RPCClient } from '../../src/core/rpc-client/RpcClient';

jest.mock('xrpl', () => {
  const actual = jest.requireActual<typeof XrplModule>('xrpl');
  return {
    ...actual,
    Client: jest.fn().mockImplementation(() => ({
      connect: jest.fn().mockResolvedValue(undefined),
      disconnect: jest.fn().mockResolvedValue(undefined),
      isConnected: jest.fn().mockReturnValue(false),
      request: jest.fn().mockResolvedValue({
        result: {
          info: {
            network_id: 2025,
            build_version: 'test-rippled',
          },
        },
      }),
    })),
  };
});

describe('RPCClient', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('RPC URL validation', () => {
    test('does not construct the WebSocket client during URL validation', () => {
      const client = new RPCClient(PFTL_TESTNET_WS_URL);

      expect(client.url).toBe(PFTL_TESTNET_WS_URL);
      expect(Client).not.toHaveBeenCalled();
    });

    test('accepts the current PFTL testnet WebSocket endpoint', () => {
      const client = new RPCClient(PFTL_TESTNET_WS_URL);

      expect(client.url).toBe(PFTL_TESTNET_WS_URL);
    });

    test('normalizes a trailing slash on the allowed PFTL testnet endpoint', () => {
      const client = new RPCClient(`${PFTL_TESTNET_WS_URL}/`);

      expect(client.url).toBe(PFTL_TESTNET_WS_URL);
    });

    test.each([
      ['non-wss protocol', 'https://ws.testnet.postfiat.org', 'RPC URL must use wss://'],
      ['credentials', 'wss://user:password@ws.testnet.postfiat.org', 'RPC URL must not include credentials'],
      ['query string', `${PFTL_TESTNET_WS_URL}?network=testnet`, 'RPC URL must not include query or hash'],
      ['hash', `${PFTL_TESTNET_WS_URL}#testnet`, 'RPC URL must not include query or hash'],
      ['path', `${PFTL_TESTNET_WS_URL}/ws`, 'RPC URL must not include a path'],
      ['arbitrary host', 'wss://s.altnet.rippletest.net:51233', 'RPC URL is not in the allowlist'],
      ['legacy PFTL direct port', 'wss://rpc.testnet.postfiat.org:6007', 'RPC URL is not in the allowlist'],
    ])('rejects %s URLs', (_caseName, url, message) => {
      expect(() => new RPCClient(url)).toThrow(message);
    });
  });
});
