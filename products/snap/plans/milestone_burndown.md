# Peersyst Deprecation Burndown (Tier 1 Minimal Host UI)

Goal: Replace the peersyst-based web UI with a minimal host UI that preserves core wallet flows (balance, send, receive, account/network switch) while reducing audit surface.

Execution note: The run continues through all milestones unless the user manually interrupts (Ctrl+C).

Scope:
- Minimal host UI that invokes the snap and exposes core wallet features.
- Deprecation of peersyst UI and removal of `@peersyst/*` dependencies from the new host.
- Documentation and audit readiness artifacts for the minimal host.

Non-goals:
- Full feature parity with the existing peersyst UI.
- New snap methods or protocol changes (unless required by gaps).

## Milestone 1: Requirements and Research
1a) Inventory current UI flows and map to snap methods.
1b) Confirm Tier 1 must-have features and explicit cuts.
1c) Decide hosting/deployment target for host-lite (static hosting, existing pipeline, etc.).
1d) Define audit constraints (what is in scope vs out of scope).
1e) Research minimal QR library and any required MetaMask snap UX constraints.

Acceptance:
- Approved Tier 1 requirements list.
- Snap method map validated.
- Deployment target selected.

## Milestone 2: Architecture and UX Spec
2a) Choose package location (new `packages/host-lite` vs replace `packages/site`).
2b) Define component primitives and styling approach (plain CSS, CSS modules, or small utility lib).
2c) Define page map and navigation (Connect, Wallet, Send, Receive, Settings).
2d) Define error/edge cases and how they are surfaced to users.
2e) Produce a lightweight UX spec (wireframes or annotated flow).
2f) Define snapId/config injection approach (env vs inline config file).
2g) Define minimal utility requirements (drops conversion, memo hex encoding, address validation).
2h) Ensure snap connect is explicit user action (no auto-request on load).

Acceptance:
- Architecture and UI spec approved.
- Minimal dependency list locked.

## Milestone 3: Host-Lite Skeleton + Snap Connect
3a) Scaffold host-lite app and build pipeline.
3b) Implement snap install/connect flow.
3c) Add account info display (address).
3d) Add network discovery and switch UI.

Acceptance:
- App runs locally and can connect to snap.
- Active account + network are displayed.

## Milestone 4: Wallet Basics
4a) Balance view using `xrpl_request` + `account_info`.
4b) Receive view with address + QR.
4c) Send form (destination, amount, memo) and validation.
4d) Transaction submit via `xrpl_signAndSubmit` and status feedback.

Acceptance:
- Balance, send, and receive flows work on testnet.
- Common errors are handled with clear UI feedback.

## Milestone 5: Hardening and QA
5a) Manual test matrix (install, connect, switch network, send, receive).
5b) Edge-case testing (invalid address, insufficient funds, user rejects).
5c) Performance and bundle size check.
5d) Security review of client-side handling (no secret exposure).
5e) Accessibility sanity checks.

Acceptance:
- Test matrix completed with documented results.
- No blocking issues.

## Milestone 6: Deprecation and Cleanup
6a) Switch default entry point to host-lite.
6b) Deprecate or archive peersyst UI.
6c) Remove `@peersyst/*` dependencies from host-lite build.
6d) Update documentation and readme to reflect Tier 1 UI.

Acceptance:
- Host-lite is the default UI.
- Peersyst packages are no longer required by host-lite.

## Milestone 7: Audit Readiness and Release
7a) Generate SBOM for host-lite.
7b) Document audit scope (snap + host-lite only).
7c) Write release notes and upgrade guidance.
7d) Tag a release or create a deployment bundle.

Acceptance:
- Audit package prepared.
- Release artifacts complete.
