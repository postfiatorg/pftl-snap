"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
function _default(breakpoint, activeBreakpoint, currentRowSize, defaultRowSize) {
  return breakpoint.rowSize || (breakpoint.maxWidth < (activeBreakpoint || 0) ? currentRowSize : defaultRowSize);
}