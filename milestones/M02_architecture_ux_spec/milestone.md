---
id: M02_architecture_ux_spec
product: snap
plan: milestone_burndown
owner: tbd
status: planned
updated_at: 2026-01-21
---

# Milestone 2: Architecture and UX Spec

## Overview
Define the host-lite architecture, UX flow, and minimal dependency footprint needed to deliver the Tier 1 experience.

## Plan
- Choose package location (new `packages/host-lite` vs replace `packages/site`).
- Define component primitives and styling approach.
- Define page map and navigation (Connect, Wallet, Send, Receive, Settings).
- Define error and edge-case handling for user feedback.
- Produce a lightweight UX spec with annotated flows.
- Define snapId/config injection approach.
- Define minimal utility requirements (drops conversion, memo encoding, address validation).
- Ensure snap connect requires explicit user action.

## Acceptance Criteria
- Architecture and UI spec approved.
- Minimal dependency list locked.

## Related Docs
- Burndown: `../../products/snap/plans/milestone_burndown.md`
- Report: `../../reports/peersyst_deprecation_m2_architecture.md`
