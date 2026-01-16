"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ChevronRightIcon;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _SvgIcon = require("../../SvgIcon");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
var _path;
var _excluded = ["className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ChevronRightIcon(_ref) {
  var className = _ref.className,
    rest = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgIcon.SvgIcon, _objectSpread(_objectSpread({}, rest), {}, {
    "data-testid": "ChevronRightIcon",
    className: (0, _reactUtils.cx)(undefined, "Icon", className),
    children: _path || (_path = /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M5.45759 0.438849C5.17659 0.719928 5.01874 1.1011 5.01874 1.49855C5.01874 1.89599 5.17659 2.27717 5.45759 2.55825L14.89 11.9906L5.45759 21.423C5.31443 21.5613 5.20024 21.7267 5.12169 21.9095C5.04313 22.0924 5.00179 22.2891 5.00006 22.4881C4.99833 22.6871 5.03625 22.8845 5.11162 23.0687C5.18698 23.2529 5.29828 23.4203 5.43901 23.561C5.57974 23.7017 5.74709 23.813 5.9313 23.8884C6.1155 23.9637 6.31287 24.0017 6.51189 23.9999C6.71091 23.9982 6.90759 23.9569 7.09046 23.8783C7.27333 23.7998 7.43872 23.6856 7.57699 23.5424L18.0691 13.0503C18.3501 12.7693 18.5079 12.3881 18.5079 11.9906C18.5079 11.5932 18.3501 11.212 18.0691 10.9309L7.57699 0.438849C7.29591 0.157854 6.91473 0 6.51729 0C6.11984 0 5.73867 0.157854 5.45759 0.438849V0.438849Z",
      fill: "black"
    }))
  }));
}