# Milestone 6 Report - Deprecation + Cleanup

## Scope delivered
- `yarn start` now points to the minimal host-lite UI.
- Root README updated to document host-lite as the default UI.
- Legacy peersyst UI marked as deprecated in `packages/site/README.md`.
- Host-lite remains peersyst-free.

## Files updated
- `package.json` (new `start` default + `start:all`)
- `README.md`
- `packages/site/README.md`

## Notes
- This change is documentation and developer entry point oriented. Deployment pipelines should be updated to serve `packages/host-lite` output as the default UI.
