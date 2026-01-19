# Release Notes - Peersyst Deprecation (Tier 1)

## Summary
- Introduced a minimal host UI (`packages/host-lite`) for core snap actions.
- Deprecated the legacy peersyst-based UI (`packages/site`).
- Updated developer entry point so `yarn start` launches host-lite.

## New host-lite capabilities
- Snap connect/install
- Account + network switch
- Balance display
- Send (Payment) with memo + destination tag
- Receive address with QR

## Upgrade guidance
- Use `yarn start` or `yarn workspace @postfiat/pftl-host-lite start` for the host UI.
- The legacy UI remains in `packages/site` for reference only and should not be deployed.
- Snap usage and RPC methods are unchanged.

## Deployment note
- Ensure build/deploy pipelines serve `packages/host-lite` output as the default UI.

## Manual steps (not executed)
- Tag release after verification.
- Generate a full SBOM with a dedicated tooling pipeline if required by audit.
