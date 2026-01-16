"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _Animated = _interopRequireDefault(require("../Animated"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["transformOrigin", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var scale = {
  entering: {
    transform: "scale(1)"
  },
  entered: {
    transform: "scale(1)"
  },
  exiting: {
    transform: "scale(0)"
  },
  exited: {
    transform: "scale(0)"
  }
};
var Scale = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("AnimatedScale", props),
    transformOrigin = _useMergeDefaultProps.transformOrigin,
    style = _useMergeDefaultProps.style,
    animatedProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated["default"], _objectSpread(_objectSpread({
    animation: scale,
    animatedProperties: "transform",
    style: _objectSpread({
      transformOrigin: transformOrigin
    }, style)
  }, animatedProps), {}, {
    ref: ref
  }));
});
Scale.displayName = "Scale";
var _default = exports["default"] = Scale;