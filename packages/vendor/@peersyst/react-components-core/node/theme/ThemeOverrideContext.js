"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeOverrideProvider = exports.ThemeOverrideContext = void 0;
var _react = require("react");
var _useThemes = _interopRequireDefault(require("../config/hook/useThemes"));
var _hook = require("./hook");
var _jsxRuntime = require("react/jsx-runtime");
var ThemeOverrideContext = exports.ThemeOverrideContext = /*#__PURE__*/(0, _react.createContext)({});
var ThemeOverrideProvider = exports.ThemeOverrideProvider = function ThemeOverrideProvider(_ref) {
  var themeProp = _ref.theme,
    overrides = _ref.overrides,
    children = _ref.children;
  var themes = (0, _useThemes["default"])();
  var inheritedTheme = (0, _hook.useTheme)();
  var theme = (typeof themeProp === "string" ? themes[themeProp] : themeProp) || inheritedTheme;
  var overriddenTheme = overrides ? overrides(theme) : theme;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemeOverrideContext.Provider, {
    value: {
      theme: overriddenTheme
    },
    children: typeof children === "function" ? children(overriddenTheme) : children
  });
};