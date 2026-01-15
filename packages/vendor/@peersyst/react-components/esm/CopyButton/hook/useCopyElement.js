import { useTheme } from "../../theme";
import { jsx as _jsx } from "react/jsx-runtime";
export default function useCopyElement(loading, copied, hovered) {
  var _useTheme = useTheme(),
    _useTheme$icons = _useTheme.icons,
    Copy = _useTheme$icons.copy,
    Check = _useTheme$icons.check,
    Loader = _useTheme.loader;
  if (loading) return /*#__PURE__*/_jsx(Loader, {});else if (hovered || !copied) return /*#__PURE__*/_jsx(Copy, {});else return /*#__PURE__*/_jsx(Check, {});
}