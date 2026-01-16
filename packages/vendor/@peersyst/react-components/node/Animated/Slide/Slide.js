"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _Animated = _interopRequireDefault(require("../Animated"));
var _setTranslateValue = require("./utils/setTranslateValue");
var _reactUtils = require("@peersyst/react-utils");
var _helpers = require("../helpers");
var _getExitedPosition = require("./utils/getExitedPosition");
var _reactHooks = require("@peersyst/react-hooks");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["direction", "container", "onEnter", "onEntering", "onExited", "onExit", "in", "duration"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Slide = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("AnimatedSlide", props),
    direction = _useMergeDefaultProps.direction,
    container = _useMergeDefaultProps.container,
    onEnter = _useMergeDefaultProps.onEnter,
    onEntering = _useMergeDefaultProps.onEntering,
    onExited = _useMergeDefaultProps.onExited,
    onExit = _useMergeDefaultProps.onExit,
    inProp = _useMergeDefaultProps["in"],
    _useMergeDefaultProps2 = _useMergeDefaultProps.duration,
    duration = _useMergeDefaultProps2 === void 0 ? 500 : _useMergeDefaultProps2,
    animatedProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var handleEnter = function handleEnter(node, isAppearing) {
    node.style.transitionDuration = "0ms";
    (0, _setTranslateValue.setTranslateValue)(direction, node, container);
    onEnter == null || onEnter(node, isAppearing);
  };
  var handleEntering = function handleEntering(node, isAppearing) {
    node.style.transitionDuration = (0, _helpers.getDuration)(duration, "entering") + "ms";
    node.style.transform = "none";
    onEntering == null || onEntering(node, isAppearing);
  };
  var handleExit = function handleExit(node) {
    (0, _setTranslateValue.setTranslateValue)(direction, node, container);
    onExit == null || onExit(node);
  };
  var handleExited = function handleExited(node) {
    onExited == null || onExited(node);
  };
  var childrenRef = (0, _react.useRef)(null);
  var handleRef = (0, _reactHooks.useForkRef)(childrenRef, ref);
  var updatePosition = (0, _react.useCallback)(function () {
    if (childrenRef.current) {
      (0, _setTranslateValue.setTranslateValue)(direction, childrenRef.current, container);
    }
  }, [direction, container]);
  (0, _react.useEffect)(function () {
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);
  (0, _react.useEffect)(function () {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === "down" || direction === "right") {
      return undefined;
    }
    var handleResize = (0, _reactUtils.debounce)(function () {
      if (childrenRef.current) {
        (0, _setTranslateValue.setTranslateValue)(direction, childrenRef.current, container);
      }
    });
    window.addEventListener("resize", handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, container]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated["default"], _objectSpread(_objectSpread({
    ref: handleRef,
    animation: {
      exited: {
        transform: (0, _getExitedPosition.getExitedPosition)(direction)
      }
    },
    animatedProperties: "transform",
    "in": inProp,
    duration: duration,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited
  }, animatedProps), {}, {
    unmountOnExit: true,
    mountOnEnter: true
  }));
});
Slide.displayName = "Slide";
var _default = exports["default"] = Slide;