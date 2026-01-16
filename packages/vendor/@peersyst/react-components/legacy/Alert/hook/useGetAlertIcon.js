import { useTheme } from "../../theme";
import { jsx as _jsx } from "react/jsx-runtime";
export default function useGetAlertIcon(type) {
  var _useTheme = useTheme(),
    _useTheme$icons = _useTheme.icons,
    Info = _useTheme$icons.info,
    Warning = _useTheme$icons.warning,
    Error = _useTheme$icons.error,
    Success = _useTheme$icons.success,
    Loader = _useTheme.loader;
  if (!type) return undefined;
  switch (type) {
    case "info":
      return /*#__PURE__*/_jsx(Info, {});
    case "warning":
      return /*#__PURE__*/_jsx(Warning, {});
    case "error":
      return /*#__PURE__*/_jsx(Error, {});
    case "success":
      return /*#__PURE__*/_jsx(Success, {});
    case "loading":
      return /*#__PURE__*/_jsx(Loader, {});
  }
}