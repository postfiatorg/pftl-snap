# Milestone 2 Report - Architecture + UX Spec

## Architecture decision
**Create a new minimal host UI** under `packages/host-lite` using React + Vite.
- Reasoning: fast dev loop, minimal dependency surface, no peersyst.
- Keep host-lite isolated from existing `packages/site` domain layers.
- Host-lite consumes snap methods directly via `window.ethereum.request`.

## Package layout (proposed)
```
packages/host-lite/
  package.json
  index.html
  vite.config.ts
  src/
    main.tsx
    App.tsx
    styles.css
    lib/
      metamask.ts
      xrpl.ts
      format.ts
    components/
      ConnectCard.tsx
      WalletCard.tsx
      SendForm.tsx
      ReceiveCard.tsx
      NetworkSelector.tsx
      AccountSelector.tsx
      StatusBanner.tsx
```

## Minimal dependencies
- `react`, `react-dom`
- `@metamask/providers` (optional; for typing only)
- `qrcode` or `react-qrcode-logo` (QR rendering)
- `vite`, `@vitejs/plugin-react` (build)

No peersyst packages.

## UX spec (Tier 1)
Single-page layout with five zones:
1) **Connect**: install/connect snap, show status.
2) **Account**: address (copy), account switch.
3) **Network**: active network + dropdown to switch.
4) **Balance**: XRP/PFTL balance, refresh.
5) **Send/Receive**:
   - Send: destination, amount, optional memo, submit.
   - Receive: address + QR.

### Copy rules
- No heavy copy. Use direct labels: "Connect Snap", "Send", "Receive".
- Show raw errors from snap in a short error banner.

### Validation
- Destination address required.
- Amount numeric > 0; convert to drops with 6 decimals.
- Memo length cap (256 bytes) and hex encoding.

## Data flow
- On load, detect MetaMask; check snap connection with `wallet_getSnaps`.
- On connect, call `wallet_requestSnaps`.
- Fetch account: `xrpl_getAccount`.
- Fetch balance: `xrpl_request` -> `account_info`.
- Fetch networks: `xrpl_getStoredNetworks` + `xrpl_getActiveNetwork`.
- Switch network: `xrpl_changeNetwork`.
- Fetch wallets: `xrpl_listWallets`; switch: `xrpl_switchWallet`.
- Send: `xrpl_signAndSubmit` Payment with `Amount` in drops, optional Memo hex.

## Gaps / burndown adjustments
- Add explicit sub-task to define config injection for snapId (env or inline config).
- Add explicit sub-task to create a small utils module for amount conversion and memo hex encoding.
- Add explicit sub-task to ensure `wallet_requestSnaps` only on user action (MetaMask guidance).

## Updated dependency risk profile
- Removes 18MB+ peersyst vendor packages and ~3.4k files from audit scope.
- Host-lite dependency surface is small and isolated.
