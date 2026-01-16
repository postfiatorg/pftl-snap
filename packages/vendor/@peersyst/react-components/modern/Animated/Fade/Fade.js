import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef } from "react";
import Animated from "../Animated";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var fade = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  },
  exiting: {
    opacity: 0
  },
  exited: {
    opacity: 0
  }
};
var Fade = /*#__PURE__*/forwardRef(function (props, ref) {
  var mergedProps = useMergeDefaultProps("AnimatedFade", props);
  return /*#__PURE__*/_jsx(Animated, _objectSpread(_objectSpread({
    animation: fade,
    animatedProperties: "opacity"
  }, mergedProps), {}, {
    ref: ref
  }));
});
Fade.displayName = "Fade";
export default Fade;