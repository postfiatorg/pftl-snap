"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useGetAlertIcon;
var _theme = require("../../theme");
var _jsxRuntime = require("react/jsx-runtime");
function useGetAlertIcon(type) {
  var _useTheme = (0, _theme.useTheme)(),
    _useTheme$icons = _useTheme.icons,
    Info = _useTheme$icons.info,
    Warning = _useTheme$icons.warning,
    Error = _useTheme$icons.error,
    Success = _useTheme$icons.success,
    Loader = _useTheme.loader;
  if (!type) return undefined;
  switch (type) {
    case "info":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Info, {});
    case "warning":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Warning, {});
    case "error":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Error, {});
    case "success":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Success, {});
    case "loading":
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(Loader, {});
  }
}