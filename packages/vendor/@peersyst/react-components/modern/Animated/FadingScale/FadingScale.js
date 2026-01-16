import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["transformOrigin", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { forwardRef } from "react";
import Animated from "../Animated";
import { jsx as _jsx } from "react/jsx-runtime";
var fadingScale = {
  entering: {
    opacity: 1,
    transform: "scale(1)"
  },
  entered: {
    opacity: 1,
    transform: "scale(1)"
  },
  exiting: {
    opacity: 0,
    transform: "scale(0)"
  },
  exited: {
    opacity: 0,
    transform: "scale(0)"
  }
};
var FadingScale = /*#__PURE__*/forwardRef(function FadingScale(props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("AnimatedFadingScale", props),
    transformOrigin = _useMergeDefaultProps.transformOrigin,
    style = _useMergeDefaultProps.style,
    animatedProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(Animated, _objectSpread(_objectSpread({
    animation: fadingScale,
    animatedProperties: "opacity, transform",
    style: _objectSpread({
      transformOrigin: transformOrigin
    }, style)
  }, animatedProps), {}, {
    ref: ref
  }));
});
FadingScale.displayName = "FadingScale";
export default FadingScale;