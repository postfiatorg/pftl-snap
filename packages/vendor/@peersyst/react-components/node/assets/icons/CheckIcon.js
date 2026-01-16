"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = CheckIcon;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _SvgIcon = require("../../SvgIcon");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
var _path;
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function CheckIcon(_ref) {
  var className = _ref.className,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgIcon.SvgIcon, _objectSpread(_objectSpread({}, rest), {}, {
    "data-testid": "CheckIcon",
    className: (0, _reactUtils.cx)(undefined, "Icon", className),
    children: _path || (_path = /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M7.83738 16.8082L2.35438 11.3252L0 13.6796L7.83738 21.517L24 5.35438L21.6456 3L7.83738 16.8082Z",
      fill: "black"
    }))
  }));
}