"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
function _default(breakpoint, activeBreakpoint, currentColGap, defaultColGap) {
  return breakpoint.colGap || (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentColGap : defaultColGap || 20);
}