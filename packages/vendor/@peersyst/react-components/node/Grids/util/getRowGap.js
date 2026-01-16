"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
function _default(breakpoint, activeBreakpoint, currentRowGap, defaultRowGap) {
  return breakpoint.rowGap || (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentRowGap : defaultRowGap || 20);
}