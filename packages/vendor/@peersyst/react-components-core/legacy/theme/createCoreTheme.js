import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["icons", "typography", "palette", "borderRadius", "zIndex"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { coreTheme } from "./coreTheme";
import { deepmerge } from "@peersyst/react-utils";
export function createCoreTheme(_ref) {
  var icons = _ref.icons,
    typography = _ref.typography,
    palette = _ref.palette,
    borderRadius = _ref.borderRadius,
    zIndex = _ref.zIndex,
    rest = _objectWithoutProperties(_ref, _excluded);
  return _objectSpread({
    icons: icons,
    typography: typography,
    palette: deepmerge(coreTheme.palette, palette),
    borderRadius: borderRadius,
    zIndex: _objectSpread(_objectSpread({}, coreTheme.zIndex), zIndex)
  }, rest);
}