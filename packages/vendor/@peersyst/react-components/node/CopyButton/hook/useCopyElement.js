"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCopyElement;
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function useCopyElement(loading, copied, hovered) {
  var _useTheme = (0, _theme.useTheme)(),
    _useTheme$icons = _useTheme.icons,
    Copy = _useTheme$icons.copy,
    Check = _useTheme$icons.check,
    Loader = _useTheme.loader;
  if (loading) return /*#__PURE__*/(0, _jsxRuntime.jsx)(Loader, {});else if (hovered || !copied) return /*#__PURE__*/(0, _jsxRuntime.jsx)(Copy, {});else return /*#__PURE__*/(0, _jsxRuntime.jsx)(Check, {});
}