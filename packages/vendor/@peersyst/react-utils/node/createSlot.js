"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _default(slot) {
  var Component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (p) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.Fragment, _objectSpread({}, p));
  };
  var Slot = function Slot(props) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({}, props));
  };
  Object.entries(Component).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
      key = _ref2[0],
      value = _ref2[1];
    if (key !== "name") Object.defineProperty(Slot, key, {
      value: value,
      writable: false,
      enumerable: true
    });
  });
  Object.defineProperty(Slot, "name", {
    value: slot,
    writable: true,
    enumerable: true
  });
  return Slot;
}