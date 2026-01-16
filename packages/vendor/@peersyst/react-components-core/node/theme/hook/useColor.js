"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _reactComponentsCore = require("@peersyst/react-components-core");
var _reactUtils = require("@peersyst/react-utils");
function _default(color) {
  var _useTheme = (0, _reactComponentsCore.useTheme)(),
    palette = _useTheme.palette;
  return color ? (0, _reactUtils.getAttribute)(palette, color) : undefined;
}