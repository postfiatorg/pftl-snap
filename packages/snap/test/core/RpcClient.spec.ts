import { RPCClient } from '../../src/core/rpc-client/RpcClient';

describe('RPCClient', () => {
  describe('RPC URL validation', () => {
    test('accepts the current PFTL testnet WebSocket endpoint', () => {
      const client = new RPCClient('wss://ws.testnet.postfiat.org');

      expect(client.url).toBe('wss://ws.testnet.postfiat.org');
    });

    test('normalizes a trailing slash on the allowed PFTL testnet endpoint', () => {
      const client = new RPCClient('wss://ws.testnet.postfiat.org/');

      expect(client.url).toBe('wss://ws.testnet.postfiat.org');
    });

    test.each([
      ['non-wss protocol', 'https://ws.testnet.postfiat.org', 'RPC URL must use wss://'],
      ['credentials', 'wss://user:password@ws.testnet.postfiat.org', 'RPC URL must not include credentials'],
      ['query string', 'wss://ws.testnet.postfiat.org?network=testnet', 'RPC URL must not include query or hash'],
      ['hash', 'wss://ws.testnet.postfiat.org#testnet', 'RPC URL must not include query or hash'],
      ['path', 'wss://ws.testnet.postfiat.org/ws', 'RPC URL must not include a path'],
      ['arbitrary host', 'wss://s.altnet.rippletest.net:51233', 'RPC URL is not in the allowlist'],
      ['legacy PFTL direct port', 'wss://rpc.testnet.postfiat.org:6007', 'RPC URL is not in the allowlist'],
    ])('rejects %s URLs', (_caseName, url, message) => {
      expect(() => new RPCClient(url)).toThrow(message);
    });
  });
});
