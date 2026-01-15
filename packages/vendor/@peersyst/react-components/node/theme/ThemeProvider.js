"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _styledComponents = require("styled-components");
var _getColorScheme = _interopRequireDefault(require("./getColorScheme"));
var _jsxRuntime = require("react/jsx-runtime");
var ThemeProvider = function ThemeProvider(_ref) {
  var _children = _ref.children,
    storeTheme = _ref.storeTheme;
  var projectName = (0, _reactComponentsCore.useConfig)("projectName");
  var storageKey = projectName + "-theme";
  var _useState = (0, _react.useState)((0, _getColorScheme["default"])()),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    systemColorScheme = _useState2[0],
    setSystemColorScheme = _useState2[1];
  var storageTheme = (0, _react.useRef)(typeof window !== "undefined" ? localStorage.getItem(storageKey) : null).current;
  var setStorageTheme = function setStorageTheme(theme) {
    return localStorage.setItem(storageKey, theme);
  };
  var handleColorSchemeChange = function handleColorSchemeChange(event) {
    if (event.matches) {
      setSystemColorScheme("dark");
    } else {
      setSystemColorScheme("light");
    }
  };
  (0, _react.useEffect)(function () {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", handleColorSchemeChange);
    return function () {
      window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change", handleColorSchemeChange);
    };
  }, []);
  var handleThemeChange = function handleThemeChange(key, theme) {
    document.documentElement.style.backgroundColor = theme.palette.background;
    document.documentElement.style.color = theme.palette.text;
    document.documentElement.style.colorScheme = theme.palette.mode;
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactComponentsCore.ThemeProvider, {
    storeTheme: storeTheme,
    systemColorScheme: systemColorScheme,
    storageTheme: storageTheme,
    setStorageTheme: setStorageTheme,
    onThemeChange: handleThemeChange,
    children: function children(theme) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_styledComponents.ThemeProvider, {
        theme: theme,
        children: _children
      });
    }
  });
};
var _default = exports["default"] = ThemeProvider;