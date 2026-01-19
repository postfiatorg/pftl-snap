# Peersyst vendored packages review (pftl-snap)

## Scope
Reviewed `packages/vendor/@peersyst/*` and all repo imports to understand how these packages are used and whether they can be removed or replaced with simpler functionality.

## What is vendored and how it is wired
- Vendored packages (local file dependencies):
  - `@peersyst/react-components` (~13 MB)
  - `@peersyst/react-components-core` (~4.1 MB)
  - `@peersyst/react-hooks` (~420 KB)
  - `@peersyst/react-utils` (~668 KB)
  - `@peersyst/react-types` (~28 KB)
- Total size: ~18.2 MB, ~3424 files.
- Root `package.json` pins these via `file:./packages/vendor/@peersyst/*`.
- `packages/site/package.json` also references these `file:` dependencies.
- These packages were vendored because they are not reliably available on npm (supply chain fix noted in commit history).

## Where they are used
- **Only the web UI** (`packages/site`) imports these packages.
- **No usage in `packages/snap`** (snap code has zero `@peersyst` imports).
- Import frequency in `packages/site/src`:
  - `@peersyst/react-components`: **229** import sites
  - `@peersyst/react-components-core`: **5** import sites
  - `@peersyst/react-hooks`: **6** import sites
  - `@peersyst/react-utils`: **15** import sites

### Most-used components (top 10 by import frequency)
- `Col` (50)
- `Typography` (44)
- `SvgIconProps` (44)
- `SvgIcon` (42)
- `Row` (24)
- `useConfig` (13)
- `useTheme` (13)
- `TextField` (11)
- `Skeleton` (11)
- `Image` (5)

### Other notable components/utilities in use
- UI: `Modal`, `Select`, `Button`, `Popover`, `Divider`, `Chip`, `Tabs`, `TabGroup`, `CircularProgress`, `InfiniteScroll`, `BlockchainAddress`, `Hash`, `ToastProvider`, `ModalProvider`.
- Hooks: `useControlled`, `useMediaQuery`.
- Utils: `alpha`, `darken`, `lighten`, `formatHash`, `capitalize`, `polling`.
- Theme/config: `createTheme`, `useConfig`, `useTheme`, `useColor`, `ThemePalette`, `ThemeColor`.

## What these packages provide (in practice)
- A full UI component library with layout, typography, form controls, modals, toasts, and theming.
- Helper utilities for color manipulation and polling.
- A theme/config system used broadly across the site UI.
- The `react-components` package also ships large optional dependencies (e.g., `highcharts`, `react-player`, `react-multi-carousel`) even though the site may not currently use them directly.

## Recommendation
**Short answer: do not nuke immediately.** These packages are deeply woven into the web UI. Replacing them would require a broad refactor of the UI layer and theme system.

### If you want to keep them (lowest risk)
- Keep vendored packages as-is for now.
- Accept repo size increase and manual update process.
- Optionally isolate vendor packages into a separate repository or git submodule to reduce main repo noise.

### If you want to remove them (large refactor)
This is feasible but substantial. You would need to replace:
1) Layout/typography primitives (`Row`, `Col`, `Typography`, `SvgIcon`).
2) Form + feedback components (`TextField`, `Select`, `Modal`, `Popover`, `Skeleton`, `ToastProvider`).
3) Theme/config hooks (`useConfig`, `useTheme`, `useColor`, `createTheme`).
4) Utility functions (`alpha`, `darken`, `lighten`, `formatHash`, `polling`).

**Suggested replacement path (if you choose to nuke):**
1) Build a small in-house UI primitives layer in `packages/site/src/ui/lib` (or adopt a lighter headless UI library).
2) Create compatibility wrappers that expose the same API signatures for the top-used components to reduce churn.
3) Replace `useConfig`/`useTheme` with a minimal context + CSS variables system.
4) Replace `react-utils` functions with small, well-tested utilities.
5) Remove `@peersyst/*` deps and vendored folder once all imports are migrated.

**Effort estimate:** moderate-to-high due to volume of usage (200+ import sites) and the centrality of theme/config usage.

## Bottom line
- If the web UI stays, **keeping the vendored packages is the pragmatic choice** for now.
- If you want to shrink the repo or simplify dependencies, plan a deliberate migration to a minimal UI layer; expect a non-trivial refactor across `packages/site/src`.
