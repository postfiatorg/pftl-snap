"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Loader = require("../Loader");
var _shadows = _interopRequireDefault(require("./shadows"));
var _typography = require("./typography");
var _createBreakpoints = require("./createBreakpoints");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _icons = require("../assets/icons");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var defaultTheme = exports.defaultTheme = _objectSpread(_objectSpread({}, _reactComponentsCore.coreTheme), {}, {
  icons: {
    info: _icons.InfoIcon,
    error: _icons.ErrorIcon,
    success: _icons.SuccessIcon,
    warning: _icons.WarningIcon,
    hide: _icons.HideIcon,
    show: _icons.ShowIcon,
    cross: _icons.CrossIcon,
    invalid: _icons.InvalidIcon,
    valid: _icons.SuccessIcon,
    check: _icons.CheckIcon,
    copy: _icons.CopyIcon,
    chevronDown: _icons.ChevronDownIcon,
    chevronUp: _icons.ChevronUpIcon
  },
  loader: _Loader.Loader,
  typography: _typography.typography,
  shadows: _shadows["default"],
  breakpoints: (0, _createBreakpoints.createBreakpoints)({
    mobile: 650,
    mini: 767,
    sm: 1100,
    md: 1359
  }),
  borderRadius: "5px"
});