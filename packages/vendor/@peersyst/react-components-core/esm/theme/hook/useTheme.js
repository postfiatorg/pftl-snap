import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
import { ThemeOverrideContext } from "../ThemeOverrideContext";
export default function () {
  var _useContext;
  var overriddenTheme = (_useContext = useContext(ThemeOverrideContext)) == null ? void 0 : _useContext.theme;
  var theme = useContext(ThemeContext).theme;
  return overriddenTheme || theme;
}