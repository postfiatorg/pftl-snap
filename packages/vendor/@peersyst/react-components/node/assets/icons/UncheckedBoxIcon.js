"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = UncheckedBoxIcon;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _SvgIcon = require("../../SvgIcon");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
var _path;
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function UncheckedBoxIcon(_ref) {
  var className = _ref.className,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgIcon.SvgIcon, _objectSpread(_objectSpread({}, rest), {}, {
    "data-testid": "UncheckedBoxIcon",
    className: (0, _reactUtils.cx)(undefined, "Icon", className),
    children: _path || (_path = /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M3.66667 0H20.3333C21.3058 0 22.2384 0.386309 22.9261 1.07394C23.6137 1.76158 24 2.69421 24 3.66667V20.3333C24 21.3058 23.6137 22.2384 22.9261 22.9261C22.2384 23.6137 21.3058 24 20.3333 24H3.66667C2.69421 24 1.76158 23.6137 1.07394 22.9261C0.386309 22.2384 0 21.3058 0 20.3333V3.66667C0 2.69421 0.386309 1.76158 1.07394 1.07394C1.76158 0.386309 2.69421 0 3.66667 0V0ZM3.66667 2C2.74667 2 2 2.74667 2 3.66667V20.3333C2 21.2533 2.74667 22 3.66667 22H20.3333C21.2533 22 22 21.2533 22 20.3333V3.66667C22 2.74667 21.2533 2 20.3333 2H3.66667Z",
      fill: "black"
    }))
  }));
}