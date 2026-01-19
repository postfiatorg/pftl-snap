# Milestone 5 Report - Hardening + QA

## Manual test matrix (Tier 1)
- Snap install/connect: Not run
- Wallet list + switch: Not run
- Network list + switch: Not run
- Balance refresh: Not run
- Send payment (valid destination): Not run
- Receive QR + copy: Not run

## Edge-case scenarios
- Invalid destination address: Not run
- Zero or invalid amount: Not run
- Non-numeric destination tag: Not run
- User rejects snap request: Not run
- Insufficient funds: Not run

## Performance + bundle size
- Build host-lite and record output sizes: Not run
- Compare against peersyst UI bundle size: Not run

## Security + privacy checks
- No secret material stored in host-lite: Verified by code inspection
- Snap calls only on user action: Verified by code inspection
- Clipboard usage limited to explicit click: Verified by code inspection

## Accessibility quick check
- Keyboard focus visibility and tab order: Not run
- Contrast and readable font sizes: Visual review only

## Follow-ups
- Execute the full manual test matrix on testnet.
- Capture build output size in this report.
- Record any errors and remediation steps.
