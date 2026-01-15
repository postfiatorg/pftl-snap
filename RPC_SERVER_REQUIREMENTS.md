# PFTL RPC Server Configuration

## Current Status (rpc.testnet.postfiat.org / 192.248.151.4)

| Port | Protocol | Status | Purpose |
|------|----------|--------|---------|
| 6007 | WSS | Working | WebSocket connections (used by explorer) |
| 6006 | ? | Forbidden | Unknown |
| 51234 | HTTPS | 502 Bad Gateway | HTTP JSON-RPC (needed by snap) |
| 443 | HTTPS | Refused | Not configured |
| 80 | HTTP | Caddy default page | Not configured for RPC |

## What Needs to Work

### 1. WebSocket (WSS) - Port 6007
**Status: Working**

Used by:
- Explorer (`wss://rpc.testnet.postfiat.org:6007`)
- Site config (`config.base.json`)

Clients connect via WebSocket and send JSON commands:
```json
{"command": "server_info"}
{"command": "account_info", "account": "rXXX..."}
```

### 2. HTTP JSON-RPC - Port 51234
**Status: Broken (502 Bad Gateway)**

Used by:
- MetaMask Snap (`packages/snap/src/core/rpc-client/RpcClient.ts`)
- Uses `fetch()` to POST JSON-RPC requests

The snap's `RPCClient` makes HTTP POST requests:
```javascript
fetch('https://rpc.testnet.postfiat.org:51234', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    method: 'server_info',
    params: [{}]
  })
})
```

Expected response:
```json
{
  "result": {
    "info": {
      "server_state": "full",
      "complete_ledgers": "1-12345",
      "network_id": 2025,
      "build_version": "2.0.0"
    }
  }
}
```

## Caddy Configuration Fix

The 502 error means Caddy is running but can't reach the rippled backend. Check:

1. **Is rippled running?**
   ```bash
   systemctl status rippled
   # or
   ps aux | grep rippled
   ```

2. **What port is rippled listening on internally?**
   ```bash
   netstat -tlnp | grep rippled
   # or check rippled.cfg
   cat /etc/opt/ripple/rippled.cfg | grep -A5 "\[port_rpc"
   ```

3. **Caddy config** (typically `/etc/caddy/Caddyfile`):
   ```caddy
   rpc.testnet.postfiat.org:51234 {
       reverse_proxy localhost:5005  # or whatever port rippled uses for HTTP
       tls {
           # your TLS config
       }
   }

   rpc.testnet.postfiat.org:6007 {
       reverse_proxy localhost:6006  # or whatever port rippled uses for WS
       tls {
           # your TLS config
       }
   }
   ```

4. **Rippled config** should have both ports enabled:
   ```cfg
   [port_rpc_admin_local]
   port = 5005
   ip = 127.0.0.1
   admin = 127.0.0.1
   protocol = http

   [port_ws_public]
   port = 6006
   ip = 0.0.0.0
   protocol = ws
   ```

## Quick Diagnostic Commands

```bash
# Check if rippled is responding locally
curl -s http://localhost:5005 -d '{"method":"server_info","params":[{}]}' | jq .result.info.server_state

# Check Caddy status
systemctl status caddy

# Check Caddy logs for 502 errors
journalctl -u caddy -f

# Reload Caddy after config changes
systemctl reload caddy
```

## Summary

| Endpoint | Used By | Required |
|----------|---------|----------|
| `wss://rpc.testnet.postfiat.org:6007` | Explorer, Site | Working |
| `https://rpc.testnet.postfiat.org:51234` | MetaMask Snap | **Needs fix** |

The snap cannot function without the HTTP endpoint because it uses `fetch()` not WebSocket.
