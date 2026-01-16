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
var _excluded = ["direction"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var getFadingSlide = function getFadingSlide(direction) {
  var translate;
  if (direction === "up") translate = "translateY(20px)";else if (direction === "down") translate = "translateY(-20px)";else if (direction === "left") translate = "translateX(20px)";else translate = "translateX(-20px)";
  return {
    entering: {
      transform: "translateY(0) translateX(0)",
      opacity: 1
    },
    entered: {
      transform: "translateY(0) translateX(0)",
      opacity: 1
    },
    exiting: {
      transform: translate,
      opacity: 0
    },
    exited: {
      transform: translate,
      opacity: 0
    }
  };
};
var FadingSlide = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("AnimatedFadingSlide", props),
    direction = _useMergeDefaultProps.direction,
    animatedProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated["default"], _objectSpread(_objectSpread({
    animation: getFadingSlide(direction),
    animatedProperties: "transform, opacity"
  }, animatedProps), {}, {
    ref: ref
  }));
});
FadingSlide.displayName = "FadingSlide";
var _default = exports["default"] = FadingSlide;