import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["default", "light", "dark"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
export default function (coreThemes) {
  var themes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var defaultTheme = themes["default"],
    lightTheme = themes.light,
    darkTheme = themes.dark,
    extraThemes = _objectWithoutProperties(themes, _excluded);
  return _objectSpread({
    "default": defaultTheme || coreThemes["default"],
    light: lightTheme,
    dark: darkTheme
  }, extraThemes);
}