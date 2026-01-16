"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTheme = createTheme;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defaultTheme = require("./defaultTheme");
var _reactUtils = require("@peersyst/react-utils");
var _createBreakpoints = require("./createBreakpoints");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _excluded = ["loader", "icons", "typography", "fonts", "palette", "breakpoints", "borderRadius", "zIndex"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function createTheme(_ref) {
  var loader = _ref.loader,
    icons = _ref.icons,
    typography = _ref.typography,
    fonts = _ref.fonts,
    palette = _ref.palette,
    breakpoints = _ref.breakpoints,
    borderRadius = _ref.borderRadius,
    zIndex = _ref.zIndex,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _objectSpread(_objectSpread({}, (0, _reactComponentsCore.createCoreTheme)({
    icons: _objectSpread(_objectSpread({}, _defaultTheme.defaultTheme.icons), icons),
    typography: (0, _reactUtils.deepmerge)(_defaultTheme.defaultTheme.typography, typography),
    fonts: fonts,
    palette: palette,
    borderRadius: borderRadius != null ? borderRadius : _defaultTheme.defaultTheme.borderRadius,
    zIndex: zIndex
  })), {}, {
    loader: loader || _defaultTheme.defaultTheme.loader,
    shadows: _defaultTheme.defaultTheme.shadows,
    breakpoints: (0, _createBreakpoints.createBreakpoints)(_objectSpread(_objectSpread({}, _defaultTheme.defaultTheme.breakpoints.values), breakpoints == null ? void 0 : breakpoints.values))
  }, rest);
}