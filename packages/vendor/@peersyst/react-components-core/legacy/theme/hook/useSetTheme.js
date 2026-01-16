import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";
export default function () {
  return useContext(ThemeContext).setTheme;
}