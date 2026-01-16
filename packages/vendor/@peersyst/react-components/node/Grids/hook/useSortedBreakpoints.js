"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _default(breakpoints, maxBreakpoint) {
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    sortedBreakpoints = _useState2[0],
    setSortedBreakpoints = _useState2[1];
  (0, _react.useEffect)(function () {
    setSortedBreakpoints([].concat((0, _toConsumableArray2["default"])((breakpoints || []).sort(function (firstEl, secondEl) {
      return firstEl.maxWidth < secondEl.maxWidth ? -1 : 1;
    })), [// @ts-ignore
    _objectSpread({
      maxWidth: Infinity
    }, maxBreakpoint)]));
  }, [breakpoints].concat((0, _toConsumableArray2["default"])(Object.values(maxBreakpoint))));
  return sortedBreakpoints;
}