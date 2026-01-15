import { useTheme } from "@peersyst/react-components-core";
import { getAttribute } from "@peersyst/react-utils";
export default function (color) {
  var _useTheme = useTheme(),
    palette = _useTheme.palette;
  return color ? getAttribute(palette, color) : undefined;
}