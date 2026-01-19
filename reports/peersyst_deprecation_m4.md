# Milestone 4 Report - Wallet Basics

## Scope delivered
- Balance fetch via `xrpl_request` with `account_info`.
- Receive panel with address + QR.
- Send form with destination, amount, optional memo, optional destination tag.
- Submission via `xrpl_signAndSubmit` with status + error feedback.

## Validation logic
- Amount must be numeric and greater than 0.
- Destination address required and checked with a lightweight XRPL regex.
- Destination tag must be numeric if provided.
- Memo is hex-encoded before submission.

## Key files
- `packages/host-lite/src/App.tsx`
- `packages/host-lite/src/lib/format.ts`

## Acceptance status
- Balance, send, and receive flows are implemented.
- Manual on-chain/testnet validation not executed in this run.

## Follow-ups
- Verify send/receive against testnet.
- Confirm error surface for rejected signatures and insufficient funds.
