import { useConfig } from "../../config";
export default function useThemeKey() {
  var themeKey = useConfig("theme");
  return themeKey;
}