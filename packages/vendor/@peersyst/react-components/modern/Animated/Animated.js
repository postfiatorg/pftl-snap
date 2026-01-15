import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { cloneElement, forwardRef } from "react";
import { getDelay, getDuration, getTimingFunction, reflow } from "./helpers";
import { Transition } from "react-transition-group";
import { Fade } from "./Fade";
import { Slide } from "./Slide";
import { FadingSlide } from "./FadingSlide";
import { Scale } from "./Scale";
import { FadingScale } from "./FadingScale";
import { Collapse } from "./Collapse";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var Animated = /*#__PURE__*/forwardRef(function Animated(props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("Animated", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.appear,
    appear = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2,
    _children = _useMergeDefaultProps.children,
    _useMergeDefaultProps3 = _useMergeDefaultProps["in"],
    inProp = _useMergeDefaultProps3 === void 0 ? true : _useMergeDefaultProps3,
    animatedProperties = _useMergeDefaultProps.animatedProperties,
    _useMergeDefaultProps4 = _useMergeDefaultProps.hideOnExit,
    hideOnExit = _useMergeDefaultProps4 === void 0 ? true : _useMergeDefaultProps4,
    timingFunction = _useMergeDefaultProps.timingFunction,
    _useMergeDefaultProps5 = _useMergeDefaultProps.animation,
    animation = _useMergeDefaultProps5 === void 0 ? {} : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.duration,
    duration = _useMergeDefaultProps6 === void 0 ? 500 : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.delay,
    delay = _useMergeDefaultProps7 === void 0 ? 0 : _useMergeDefaultProps7,
    _useMergeDefaultProps8 = _useMergeDefaultProps.mountOnEnter,
    mountOnEnter = _useMergeDefaultProps8 === void 0 ? false : _useMergeDefaultProps8,
    _useMergeDefaultProps9 = _useMergeDefaultProps.unmountOnExit,
    unmountOnExit = _useMergeDefaultProps9 === void 0 ? false : _useMergeDefaultProps9,
    onEnter = _useMergeDefaultProps.onEnter,
    onEntering = _useMergeDefaultProps.onEntering,
    onEntered = _useMergeDefaultProps.onEntered,
    onExit = _useMergeDefaultProps.onExit,
    onExiting = _useMergeDefaultProps.onExiting,
    onExited = _useMergeDefaultProps.onExited,
    addEndListener = _useMergeDefaultProps.addEndListener,
    style = _useMergeDefaultProps.style;
  var handleOnEnter = function handleOnEnter(node, isAppearing) {
    // Make sure exited and entering don't happen at the same time when mountOnEnter = true
    reflow(node);
    onEnter == null || onEnter(node, isAppearing);
  };
  return /*#__PURE__*/_jsx(Transition, {
    "in": inProp,
    timeout: duration,
    appear: appear,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    onEnter: handleOnEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    addEndListener: addEndListener,
    children: function children(status) {
      return /*#__PURE__*/cloneElement(_children, _objectSpread(_objectSpread({}, _children.props), {}, {
        ref: ref,
        style: _objectSpread(_objectSpread(_objectSpread({}, _children.props.style), {}, {
          transition: "unset",
          visibility: hideOnExit && status === "exited" && !inProp ? "hidden" : undefined
        }, status !== "unmounted" && animation[status]), {}, {
          transitionTimingFunction: getTimingFunction(timingFunction, status),
          transitionDuration: getDuration(duration, status) + "ms",
          transitionDelay: getDelay(delay, status) + "ms",
          transitionProperty: animatedProperties
        }, style)
      }));
    }
  });
});
Animated.Collapse = Collapse;
Animated.Fade = Fade;
Animated.Slide = Slide;
Animated.FadingSlide = FadingSlide;
Animated.Scale = Scale;
Animated.FadingScale = FadingScale;
export default Animated;