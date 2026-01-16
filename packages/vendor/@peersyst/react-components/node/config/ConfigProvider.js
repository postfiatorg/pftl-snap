"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactComponentsCore = require("@peersyst/react-components-core");
var _theme = require("../theme");
var _jsxRuntime = require("react/jsx-runtime");
var ConfigProvider = function ConfigProvider(_ref) {
  var config = _ref.config,
    _ref$storeTheme = _ref.storeTheme,
    storeTheme = _ref$storeTheme === void 0 ? false : _ref$storeTheme,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactComponentsCore.ConfigProvider, {
    config: config,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_theme.ThemeProvider, {
      storeTheme: storeTheme,
      children: children
    })
  });
};
var _default = exports["default"] = ConfigProvider;