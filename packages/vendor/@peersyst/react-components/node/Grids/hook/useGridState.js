"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _react = require("react");
function _default() {
  return (0, _react.useState)({
    rowSize: undefined,
    colGap: undefined,
    rowGap: undefined,
    activeBreakpoint: Infinity,
    columns: 0,
    alignItems: undefined,
    justifyItems: undefined,
    justifyContent: undefined
  });
}