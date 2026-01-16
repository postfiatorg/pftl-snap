import { createContext } from "react";
import useThemes from "../config/hook/useThemes";
import { useTheme } from "./hook";
import { jsx as _jsx } from "react/jsx-runtime";
export var ThemeOverrideContext = /*#__PURE__*/createContext({});
export var ThemeOverrideProvider = function ThemeOverrideProvider(_ref) {
  var themeProp = _ref.theme,
    overrides = _ref.overrides,
    children = _ref.children;
  var themes = useThemes();
  var inheritedTheme = useTheme();
  var theme = (typeof themeProp === "string" ? themes[themeProp] : themeProp) || inheritedTheme;
  var overriddenTheme = overrides ? overrides(theme) : theme;
  return /*#__PURE__*/_jsx(ThemeOverrideContext.Provider, {
    value: {
      theme: overriddenTheme
    },
    children: typeof children === "function" ? children(overriddenTheme) : children
  });
};