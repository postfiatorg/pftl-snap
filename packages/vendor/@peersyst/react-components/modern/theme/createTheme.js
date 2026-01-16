import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["loader", "icons", "typography", "fonts", "palette", "breakpoints", "borderRadius", "zIndex"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { defaultTheme } from "./defaultTheme";
import { deepmerge } from "@peersyst/react-utils";
import { createBreakpoints } from "./createBreakpoints";
import { createCoreTheme } from "@peersyst/react-components-core";
export function createTheme(_ref) {
  var loader = _ref.loader,
    icons = _ref.icons,
    typography = _ref.typography,
    fonts = _ref.fonts,
    palette = _ref.palette,
    breakpoints = _ref.breakpoints,
    borderRadius = _ref.borderRadius,
    zIndex = _ref.zIndex,
    rest = _objectWithoutProperties(_ref, _excluded);
  return _objectSpread(_objectSpread({}, createCoreTheme({
    icons: _objectSpread(_objectSpread({}, defaultTheme.icons), icons),
    typography: deepmerge(defaultTheme.typography, typography),
    fonts: fonts,
    palette: palette,
    borderRadius: borderRadius != null ? borderRadius : defaultTheme.borderRadius,
    zIndex: zIndex
  })), {}, {
    loader: loader || defaultTheme.loader,
    shadows: defaultTheme.shadows,
    breakpoints: createBreakpoints(_objectSpread(_objectSpread({}, defaultTheme.breakpoints.values), breakpoints == null ? void 0 : breakpoints.values))
  }, rest);
}