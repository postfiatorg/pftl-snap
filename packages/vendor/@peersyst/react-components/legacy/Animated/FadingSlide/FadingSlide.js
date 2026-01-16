import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["direction"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import Animated from "../Animated";
import { jsx as _jsx } from "react/jsx-runtime";
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
var FadingSlide = /*#__PURE__*/forwardRef(function (props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("AnimatedFadingSlide", props),
    direction = _useMergeDefaultProps.direction,
    animatedProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(Animated, _objectSpread(_objectSpread({
    animation: getFadingSlide(direction),
    animatedProperties: "transform, opacity"
  }, animatedProps), {}, {
    ref: ref
  }));
});
FadingSlide.displayName = "FadingSlide";
export default FadingSlide;