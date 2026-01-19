# Audit Scope - Host-Lite + Snap

## In scope
- `packages/snap` (MetaMask snap code)
- `packages/host-lite` (minimal host UI)

## Out of scope
- `packages/site` (legacy peersyst UI)
- `packages/vendor` (vendored peersyst packages)
- Any deprecated UI components or storybook artifacts

## Rationale
The host-lite UI removes peersyst-based dependencies and limits the UI surface to snap invocation and basic wallet flows. The audit should focus on:
- Snap permissions and RPC surface
- Host-lite UI request flows and validation
- Build pipeline for host-lite assets
