export default function (breakpoint, activeBreakpoint, currentRowGap, defaultRowGap) {
  return breakpoint.rowGap || (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentRowGap : defaultRowGap || 20);
}