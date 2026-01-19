# Milestone 1 Report - Requirements and Research

## 1) Current UI flow inventory and snap method map

### Core snap methods in use
- `wallet_getSnaps` / `wallet_requestSnaps` / `wallet_invokeSnap`
- Account:
  - `xrpl_getAccount` (address + public key)
  - `xrpl_listWallets` / `xrpl_switchWallet`
  - `xrpl_importWallet` (seed import; currently used in WalletManager)
- Network:
  - `xrpl_getStoredNetworks`
  - `xrpl_getActiveNetwork`
  - `xrpl_changeNetwork`
- Transactions:
  - `xrpl_signAndSubmit` (used for Payment)
  - `xrpl_signMessage` (used in snap dialogs, not required for Tier 1 host)
- Generic RPC:
  - `xrpl_request` (account_info, account_lines, account_tx, server_info, tx)

### Current UI flows (site) vs Tier 1 needs
- **Connect / install snap**: in `WalletManager` + `MetaMaskRepository`.
- **Balance display**: `WalletController.getBalance()` -> `XrplService.getAccountInfo()` via `xrpl_request`.
- **Send XRP/PFTL**: `TransactionController.sendTransaction()` -> `MetaMaskRepository.send()` -> `xrpl_signAndSubmit`.
- **Receive**: modal with address + QR.
- **Network switch**: `NetworkController.changeNetwork()` -> `xrpl_changeNetwork`.
- **Account switch**: `xrpl_listWallets` + `xrpl_switchWallet`.

### Tier 1 minimal mapping
- Address: `xrpl_getAccount`
- Balance: `xrpl_request` -> `account_info`
- Send: `xrpl_signAndSubmit` with Payment
- Receive: address + QR (host UI only)
- Network: `xrpl_getStoredNetworks`, `xrpl_getActiveNetwork`, `xrpl_changeNetwork`
- Account: `xrpl_listWallets`, `xrpl_switchWallet`

## 2) Tier 1 must-haves and explicit cuts

### Must-haves
- Snap install/connect flow.
- Active address + balance display.
- Send PFTL Payment (destination, amount, memo).
- Receive view (address + QR).
- Network and account switch.

### Cuts (Tier 1)
- NFT flows, AMM, trustlines, token list, transaction history.
- Fiat on-ramp and Transak integration.
- Advanced settings and dashboards.
- Seed import UI (optional; defer unless required for ops).

## 3) Deployment target
- **Recommended**: new minimal host under `packages/host-lite` with static build output.
- Output can be hosted as static assets (same static hosting pipeline as site).
- Keep `packages/site` as legacy until host-lite is stable, then deprecate/archive.

## 4) Audit scope
- In scope: snap (`packages/snap`) + host-lite UI only.
- Out of scope: peersyst UI and any vendored `@peersyst/*` packages.
- Provide an SBOM for host-lite dependencies only.

## 5) QR and MetaMask constraints
- QR: use a small QR generator (e.g., `qrcode` for canvas/data URL). Avoid large UI libs.
- MetaMask: host must detect `window.ethereum`, check snap support via `wallet_getSnaps`, and only call `wallet_requestSnaps` on explicit user action.
- If MetaMask is absent or snap unsupported, show a blocking message.

## 6) Open questions
- Do we keep seed import in Tier 1, or defer to a maintenance-only admin flow?
- Is transaction history required for initial launch, or fully out of scope?
- Preferred hosting domain/path for host-lite?
