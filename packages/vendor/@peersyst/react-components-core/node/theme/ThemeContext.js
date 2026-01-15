"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThemeProvider = exports.ThemeContext = exports.ThemeConsumer = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _useTheme = _interopRequireDefault(require("../config/hook/useTheme"));
var _hook = require("./hook");
var _jsxRuntime = require("react/jsx-runtime");
var ThemeContext = exports.ThemeContext = /*#__PURE__*/(0, _react.createContext)({});
var ThemeProvider = exports.ThemeProvider = function ThemeProvider(_ref) {
  var storeTheme = _ref.storeTheme,
    systemColorScheme = _ref.systemColorScheme,
    storageTheme = _ref.storageTheme,
    setStorageTheme = _ref.setStorageTheme,
    onThemeChange = _ref.onThemeChange,
    children = _ref.children;
  var configTheme = (0, _hook.useThemeKey)();
  var _useState = (0, _react.useState)(configTheme || storageTheme || systemColorScheme),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    themeKey = _useState2[0],
    setThemeKey = _useState2[1];
  var theme = (0, _useTheme["default"])(themeKey);
  (0, _react.useEffect)(function () {
    if (storeTheme) console.warn("[RNC]: Theme storage is deprecated. In v4.0.0 theme will have to be stored externally and provide it via `theme` prop.");
  }, [storeTheme]);
  (0, _react.useEffect)(function () {
    if (configTheme) setThemeKey(configTheme);
  }, [configTheme]);
  (0, _react.useEffect)(function () {
    if (!configTheme && storageTheme) setThemeKey(storageTheme);
  }, [storageTheme]);
  (0, _react.useEffect)(function () {
    if (!storageTheme && !configTheme) setThemeKey(systemColorScheme);
  }, [systemColorScheme]);
  (0, _react.useEffect)(function () {
    onThemeChange == null || onThemeChange(themeKey, theme);
  }, [themeKey]);
  var setTheme = function setTheme(newThemeKey) {
    if (storeTheme) {
      setStorageTheme(newThemeKey);
      setThemeKey(newThemeKey);
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(ThemeContext.Provider, {
    value: {
      theme: theme,
      setTheme: setTheme
    },
    children: typeof children === "function" ? children(theme) : children
  });
};
var ThemeConsumer = exports.ThemeConsumer = ThemeContext.Consumer;