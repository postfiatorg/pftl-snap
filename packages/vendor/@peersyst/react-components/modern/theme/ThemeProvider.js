import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider as CoreThemeProvider, useConfig } from "@peersyst/react-components-core";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";
import getColorScheme from "./getColorScheme";
import { jsx as _jsx } from "react/jsx-runtime";
var ThemeProvider = function ThemeProvider(_ref) {
  var _children = _ref.children,
    storeTheme = _ref.storeTheme;
  var projectName = useConfig("projectName");
  var storageKey = projectName + "-theme";
  var _useState = useState(getColorScheme()),
    _useState2 = _slicedToArray(_useState, 2),
    systemColorScheme = _useState2[0],
    setSystemColorScheme = _useState2[1];
  var storageTheme = useRef(typeof window !== "undefined" ? localStorage.getItem(storageKey) : null).current;
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
  useEffect(function () {
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
  return /*#__PURE__*/_jsx(CoreThemeProvider, {
    storeTheme: storeTheme,
    systemColorScheme: systemColorScheme,
    storageTheme: storageTheme,
    setStorageTheme: setStorageTheme,
    onThemeChange: handleThemeChange,
    children: function children(theme) {
      return /*#__PURE__*/_jsx(StyledComponentsProvider, {
        theme: theme,
        children: _children
      });
    }
  });
};
export default ThemeProvider;