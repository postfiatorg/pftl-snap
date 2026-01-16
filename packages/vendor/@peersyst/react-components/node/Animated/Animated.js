"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var _helpers = require("./helpers");
var _reactTransitionGroup = require("react-transition-group");
var _Fade = require("./Fade");
var _Slide = require("./Slide");
var _FadingSlide = require("./FadingSlide");
var _Scale = require("./Scale");
var _FadingScale = require("./FadingScale");
var _Collapse = require("./Collapse");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Animated = /*#__PURE__*/(0, _react.forwardRef)(function Animated(props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Animated", props),
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
    (0, _helpers.reflow)(node);
    onEnter == null || onEnter(node, isAppearing);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactTransitionGroup.Transition, {
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
      return /*#__PURE__*/(0, _react.cloneElement)(_children, _objectSpread(_objectSpread({}, _children.props), {}, {
        ref: ref,
        style: _objectSpread(_objectSpread(_objectSpread({}, _children.props.style), {}, {
          transition: "unset",
          visibility: hideOnExit && status === "exited" && !inProp ? "hidden" : undefined
        }, status !== "unmounted" && animation[status]), {}, {
          transitionTimingFunction: (0, _helpers.getTimingFunction)(timingFunction, status),
          transitionDuration: (0, _helpers.getDuration)(duration, status) + "ms",
          transitionDelay: (0, _helpers.getDelay)(delay, status) + "ms",
          transitionProperty: animatedProperties
        }, style)
      }));
    }
  });
});
Animated.Collapse = _Collapse.Collapse;
Animated.Fade = _Fade.Fade;
Animated.Slide = _Slide.Slide;
Animated.FadingSlide = _FadingSlide.FadingSlide;
Animated.Scale = _Scale.Scale;
Animated.FadingScale = _FadingScale.FadingScale;
var _default = exports["default"] = Animated;