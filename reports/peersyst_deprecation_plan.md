# Peersyst Deprecation Plan (Tier 1 Minimal Host UI)

## Goal
Replace the current peersyst-based web UI with a minimal host UI that preserves core wallet flows (balance, send, receive, network/account switch) while reducing audit surface and dependency weight.

## Scope (Tier 1)
Must keep:
- Snap install/connect flow.
- Active account address + balance display.
- Send PFTL (Payment) with memo support.
- Receive view (address + QR).
- Network switch (mainnet/testnet) and account switch.

Out of scope:
- Full peersyst UI/UX, extensive theming, complex dashboards.
- Advanced flows (NFT, AMM, etc.) unless explicitly required.

## Snap API mapping
- Address: `xrpl_getAccount`
- Balance: `xrpl_request` -> `account_info` (and `account_lines` if needed)
- Send: build Payment -> `xrpl_signAndSubmit`
- Receive: no snap call, show address + QR
- Networks: `xrpl_getStoredNetworks`, `xrpl_getActiveNetwork`, `xrpl_changeNetwork`
- Accounts: `xrpl_listWallets`, `xrpl_switchWallet`

## Implementation plan
1) Create minimal host app
   - New package (e.g., `packages/host-lite`) or replace `packages/site` with a slim UI.
   - Dependencies: React + routing (optional) + small QR lib. No peersyst.

2) UI screens
   - Connect/Install
   - Wallet overview (address + balance)
   - Send form (destination, amount, memo)
   - Receive view (address + QR)
   - Settings drawer (network + account switch)

3) Data and error handling
   - Balance refresh on interval or manual refresh.
   - Clear transaction status feedback.
   - User rejection and network errors handled explicitly.

4) Deprecation steps
   - Freeze peersyst UI (no new features).
   - Introduce host-lite as default entry point.
   - Remove peersyst dependencies once host-lite is stable.

5) Audit scope reduction
   - Document that peersyst UI is deprecated and removed from audit scope.
   - Produce SBOM for host-lite only.

## Acceptance criteria
- Install and connect snap works on clean browser profile.
- Address + balance render correctly on both mainnet/testnet.
- Send flow completes with on-chain confirmation.
- Receive view shows QR + address.
- Account and network switches update balance and UI state.
- No peersyst packages in dependency tree of host-lite.

## Risks and mitigations
- Risk: feature regression vs current UI.
  - Mitigation: clearly document Tier 1 feature set and deprecate extras.
- Risk: hidden peersyst reliance in shared code.
  - Mitigation: isolate host-lite in a separate package and avoid shared UI modules.

## Suggested follow-up
- Create a migration checklist for any existing users.
- Decide whether to archive or remove `packages/site` after host-lite launch.
