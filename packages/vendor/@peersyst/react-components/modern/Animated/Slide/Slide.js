import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["direction", "container", "onEnter", "onEntering", "onExited", "onExit", "in", "duration"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef, useCallback, useEffect, useRef } from "react";
import Animated from "../Animated";
import { setTranslateValue } from "./utils/setTranslateValue";
import { debounce } from "@peersyst/react-utils";
import { getDuration } from "../helpers";
import { getExitedPosition } from "./utils/getExitedPosition";
import { useForkRef } from "@peersyst/react-hooks";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var Slide = /*#__PURE__*/forwardRef(function (props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("AnimatedSlide", props),
    direction = _useMergeDefaultProps.direction,
    container = _useMergeDefaultProps.container,
    onEnter = _useMergeDefaultProps.onEnter,
    onEntering = _useMergeDefaultProps.onEntering,
    onExited = _useMergeDefaultProps.onExited,
    onExit = _useMergeDefaultProps.onExit,
    inProp = _useMergeDefaultProps["in"],
    _useMergeDefaultProps2 = _useMergeDefaultProps.duration,
    duration = _useMergeDefaultProps2 === void 0 ? 500 : _useMergeDefaultProps2,
    animatedProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var handleEnter = function handleEnter(node, isAppearing) {
    node.style.transitionDuration = "0ms";
    setTranslateValue(direction, node, container);
    onEnter == null || onEnter(node, isAppearing);
  };
  var handleEntering = function handleEntering(node, isAppearing) {
    node.style.transitionDuration = getDuration(duration, "entering") + "ms";
    node.style.transform = "none";
    onEntering == null || onEntering(node, isAppearing);
  };
  var handleExit = function handleExit(node) {
    setTranslateValue(direction, node, container);
    onExit == null || onExit(node);
  };
  var handleExited = function handleExited(node) {
    onExited == null || onExited(node);
  };
  var childrenRef = useRef(null);
  var handleRef = useForkRef(childrenRef, ref);
  var updatePosition = useCallback(function () {
    if (childrenRef.current) {
      setTranslateValue(direction, childrenRef.current, container);
    }
  }, [direction, container]);
  useEffect(function () {
    if (!inProp) {
      updatePosition();
    }
  }, [inProp, updatePosition]);
  useEffect(function () {
    // Skip configuration where the position is screen size invariant.
    if (inProp || direction === "down" || direction === "right") {
      return undefined;
    }
    var handleResize = debounce(function () {
      if (childrenRef.current) {
        setTranslateValue(direction, childrenRef.current, container);
      }
    });
    window.addEventListener("resize", handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener("resize", handleResize);
    };
  }, [direction, inProp, container]);
  return /*#__PURE__*/_jsx(Animated, _objectSpread(_objectSpread({
    ref: handleRef,
    animation: {
      exited: {
        transform: getExitedPosition(direction)
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
export default Slide;