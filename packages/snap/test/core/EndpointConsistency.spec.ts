import siteConfig from '../../../site/src/common/config/config.base.json';
import { PFTL_TESTNET_CHAIN_ID, PFTL_TESTNET_EXPLORER_URL, PFTL_TESTNET_NAME, PFTL_TESTNET_WS_URL } from '../../src/core/network';
import { RPCClient } from '../../src/core/rpc-client/RpcClient';
import { DEFAULT_NETWORKS } from '../../src/core/StateManager';

const LEGACY_PFTL_TESTNET_RPC_URL = 'wss://rpc.testnet.postfiat.org:6007';

type SiteConfig = {
  nodeUrls: {
    pftlTestnet: string;
  };
};

const siteBaseConfig = siteConfig as SiteConfig;

describe('PFTL testnet endpoint consistency', () => {
  test('keeps frontend config, Snap defaults, and RPC allowlist aligned on the canonical endpoint', () => {
    const [defaultNetwork] = DEFAULT_NETWORKS;
    const client = new RPCClient(PFTL_TESTNET_WS_URL);

    expect(siteBaseConfig.nodeUrls.pftlTestnet).toBe(PFTL_TESTNET_WS_URL);
    expect(defaultNetwork).toEqual({
      chainId: PFTL_TESTNET_CHAIN_ID,
      name: PFTL_TESTNET_NAME,
      nodeUrl: PFTL_TESTNET_WS_URL,
      explorerUrl: PFTL_TESTNET_EXPLORER_URL,
    });
    expect(client.url).toBe(PFTL_TESTNET_WS_URL);
  });

  test('does not treat the legacy direct-port endpoint as valid runtime configuration', () => {
    expect(siteBaseConfig.nodeUrls.pftlTestnet).not.toBe(LEGACY_PFTL_TESTNET_RPC_URL);
    expect(DEFAULT_NETWORKS.map(({ nodeUrl }) => nodeUrl)).not.toContain(LEGACY_PFTL_TESTNET_RPC_URL);
    expect(() => new RPCClient(LEGACY_PFTL_TESTNET_RPC_URL)).toThrow('RPC URL is not in the allowlist');
  });
});
