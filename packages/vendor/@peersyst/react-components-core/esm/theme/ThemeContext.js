import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { createContext, useEffect, useState } from "react";
import useTheme from "../config/hook/useTheme";
import { useThemeKey } from "./hook";
import { jsx as _jsx } from "react/jsx-runtime";
export var ThemeContext = /*#__PURE__*/createContext({});
export var ThemeProvider = function ThemeProvider(_ref) {
  var storeTheme = _ref.storeTheme,
    systemColorScheme = _ref.systemColorScheme,
    storageTheme = _ref.storageTheme,
    setStorageTheme = _ref.setStorageTheme,
    onThemeChange = _ref.onThemeChange,
    children = _ref.children;
  var configTheme = useThemeKey();
  var _useState = useState(configTheme || storageTheme || systemColorScheme),
    _useState2 = _slicedToArray(_useState, 2),
    themeKey = _useState2[0],
    setThemeKey = _useState2[1];
  var theme = useTheme(themeKey);
  useEffect(function () {
    if (storeTheme) console.warn("[RNC]: Theme storage is deprecated. In v4.0.0 theme will have to be stored externally and provide it via `theme` prop.");
  }, [storeTheme]);
  useEffect(function () {
    if (configTheme) setThemeKey(configTheme);
  }, [configTheme]);
  useEffect(function () {
    if (!configTheme && storageTheme) setThemeKey(storageTheme);
  }, [storageTheme]);
  useEffect(function () {
    if (!storageTheme && !configTheme) setThemeKey(systemColorScheme);
  }, [systemColorScheme]);
  useEffect(function () {
    onThemeChange == null || onThemeChange(themeKey, theme);
  }, [themeKey]);
  var setTheme = function setTheme(newThemeKey) {
    if (storeTheme) {
      setStorageTheme(newThemeKey);
      setThemeKey(newThemeKey);
    }
  };
  return /*#__PURE__*/_jsx(ThemeContext.Provider, {
    value: {
      theme: theme,
      setTheme: setTheme
    },
    children: typeof children === "function" ? children(theme) : children
  });
};
export var ThemeConsumer = ThemeContext.Consumer;