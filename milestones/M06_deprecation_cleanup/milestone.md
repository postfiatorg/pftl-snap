---
id: M06_deprecation_cleanup
product: snap
plan: milestone_burndown
owner: tbd
status: planned
updated_at: 2026-01-21
---

# Milestone 6: Deprecation and Cleanup

## Overview
Switch to host-lite as the default UI and remove peersyst dependencies from the host-lite build.

## Plan
- Switch default entry point to host-lite.
- Deprecate or archive peersyst UI.
- Remove `@peersyst/*` dependencies from host-lite build.
- Update documentation to reflect Tier 1 UI scope.

## Acceptance Criteria
- Host-lite is the default UI.
- Peersyst packages are no longer required by host-lite.

## Related Docs
- Burndown: `../../products/snap/plans/milestone_burndown.md`
- Report: `../../reports/peersyst_deprecation_m6.md`
