export default function (breakpoint, activeBreakpoint, currentColGap, defaultColGap) {
  return breakpoint.colGap || (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentColGap : defaultColGap || 20);
}