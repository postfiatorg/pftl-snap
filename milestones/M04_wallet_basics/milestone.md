---
id: M04_wallet_basics
product: snap
plan: milestone_burndown
owner: tbd
status: planned
updated_at: 2026-01-21
---

# Milestone 4: Wallet Basics

## Overview
Implement balance, receive, and send flows with validation and transaction feedback.

## Plan
- Build balance view using `xrpl_request` + `account_info`.
- Build receive view with address and QR.
- Build send form (destination, amount, memo) and validation.
- Submit transactions via `xrpl_signAndSubmit` with status feedback.

## Acceptance Criteria
- Balance, send, and receive flows work on testnet.
- Common errors are handled with clear UI feedback.

## Related Docs
- Burndown: `../../products/snap/plans/milestone_burndown.md`
- Report: `../../reports/peersyst_deprecation_m4.md`
