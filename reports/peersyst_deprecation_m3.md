# Milestone 3 Report - Host-Lite Skeleton + Snap Connect

## Scope delivered
- Created a new minimal host UI package at `packages/host-lite` using Vite + React.
- Implemented snap detection and explicit connect flow.
- Added account + wallet list display and network discovery/switch UI.
- Added styling system (plain CSS) with a lightweight layout.

## Key files
- `packages/host-lite/package.json` (new workspace)
- `packages/host-lite/src/App.tsx` (single-page UI)
- `packages/host-lite/src/lib/metamask.ts` (snap request helpers)
- `packages/host-lite/src/lib/config.ts` (snapId injection via `VITE_SNAP_ID` or `window.__PFTL_HOST_CONFIG__`)
- `packages/host-lite/src/styles.css` (base styling)

## Connect flow summary
- Detects MetaMask provider via `window.ethereum`.
- Uses `wallet_getSnaps` to check install status.
- Uses `wallet_requestSnaps` on explicit user click.
- Loads account, wallet list, and network data after connect.

## Acceptance status
- App scaffolding and build pipeline are in place.
- Snap connect + account/network display logic is implemented.
- Local runtime verification not executed in this run.

## Follow-ups
- Manual UI verification once the snap is installed.
