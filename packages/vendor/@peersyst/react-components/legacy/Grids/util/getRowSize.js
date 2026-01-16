export default function (breakpoint, activeBreakpoint, currentRowSize, defaultRowSize) {
  return breakpoint.rowSize || (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentRowSize : defaultRowSize);
}