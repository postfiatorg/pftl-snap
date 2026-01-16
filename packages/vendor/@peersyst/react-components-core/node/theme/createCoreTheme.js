"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCoreTheme = createCoreTheme;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _coreTheme = require("./coreTheme");
var _reactUtils = require("@peersyst/react-utils");
var _excluded = ["icons", "typography", "palette", "borderRadius", "zIndex"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function createCoreTheme(_ref) {
  var icons = _ref.icons,
    typography = _ref.typography,
    palette = _ref.palette,
    borderRadius = _ref.borderRadius,
    zIndex = _ref.zIndex,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return _objectSpread({
    icons: icons,
    typography: typography,
    palette: (0, _reactUtils.deepmerge)(_coreTheme.coreTheme.palette, palette),
    borderRadius: borderRadius,
    zIndex: _objectSpread(_objectSpread({}, _coreTheme.coreTheme.zIndex), zIndex)
  }, rest);
}