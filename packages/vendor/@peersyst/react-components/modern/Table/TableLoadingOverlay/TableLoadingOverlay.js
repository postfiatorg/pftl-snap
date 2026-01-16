import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["loading", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useTheme } from "@peersyst/react-components-core";
import { TableLoadingOverlayRoot } from "./TableLoadingOverlay.styles";
import clsx from "clsx";
import { jsx as _jsx } from "react/jsx-runtime";
var TableLoadingOverlay = function TableLoadingOverlay(_ref) {
  var _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    className = _ref.className,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useTheme = useTheme(),
    Loader = _useTheme.loader;
  return /*#__PURE__*/_jsx(TableLoadingOverlayRoot, _objectSpread(_objectSpread({
    loading: loading,
    className: clsx("TableLoadingOverlay", className)
  }, rest), {}, {
    children: /*#__PURE__*/_jsx(Loader, {})
  }));
};
export default TableLoadingOverlay;