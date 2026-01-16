"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reactComponentsCore = require("@peersyst/react-components-core");
var _TableLoadingOverlay = require("./TableLoadingOverlay.styles");
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["loading", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableLoadingOverlay = function TableLoadingOverlay(_ref) {
  var _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    className = _ref.className,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var _useTheme = (0, _reactComponentsCore.useTheme)(),
    Loader = _useTheme.loader;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableLoadingOverlay.TableLoadingOverlayRoot, _objectSpread(_objectSpread({
    loading: loading,
    className: (0, _clsx["default"])("TableLoadingOverlay", className)
  }, rest), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Loader, {})
  }));
};
var _default = exports["default"] = TableLoadingOverlay;