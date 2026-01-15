import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["in", "orientation", "collapsedSize", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "children", "duration"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef, useEffect, useRef } from "react";
import Animated from "../Animated";
import { useForkRef } from "@peersyst/react-hooks";
import { CollapseRoot, CollapseWrapper, CollapseWrapperInner } from "./Collapse.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var Collapse = /*#__PURE__*/forwardRef(function (props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("AnimatedCollapse", props),
    inProp = _useMergeDefaultProps["in"],
    _useMergeDefaultProps2 = _useMergeDefaultProps.orientation,
    orientation = _useMergeDefaultProps2 === void 0 ? "vertical" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.collapsedSize,
    collapsedSizeProp = _useMergeDefaultProps3 === void 0 ? "0px" : _useMergeDefaultProps3,
    onEnter = _useMergeDefaultProps.onEnter,
    onEntering = _useMergeDefaultProps.onEntering,
    onEntered = _useMergeDefaultProps.onEntered,
    onExit = _useMergeDefaultProps.onExit,
    onExiting = _useMergeDefaultProps.onExiting,
    onExited = _useMergeDefaultProps.onExited,
    children = _useMergeDefaultProps.children,
    _useMergeDefaultProps4 = _useMergeDefaultProps.duration,
    duration = _useMergeDefaultProps4 === void 0 ? 300 : _useMergeDefaultProps4,
    animatedProps = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var collapsedSize = typeof collapsedSizeProp === "number" ? "".concat(collapsedSizeProp, "px") : collapsedSizeProp;
  var isHorizontal = orientation === "horizontal";
  var size = isHorizontal ? "width" : "height";
  var wrapperRef = useRef(null);
  var nodeRef = useRef(null);
  var handleRef = useForkRef(ref, nodeRef);
  var getWrapperSize = function getWrapperSize() {
    return wrapperRef.current ? wrapperRef.current[isHorizontal ? "clientWidth" : "clientHeight"] : 0;
  };
  var handleEnter = function handleEnter(node, isAppearing) {
    if (wrapperRef.current && isHorizontal) {
      // Set absolute position to get the size of collapsed content
      wrapperRef.current.style.position = "absolute";
    }
    node.style[size] = collapsedSize;
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  };
  var handleEntering = function handleEntering(node, isAppearing) {
    var wrapperSize = getWrapperSize();
    if (wrapperRef.current && isHorizontal) {
      // After the size is read reset the position back to default
      wrapperRef.current.style.position = "";
    }
    node.style[size] = "".concat(wrapperSize, "px");
    if (onEntering) {
      onEntering(node, isAppearing);
    }
  };
  var handleEntered = function handleEntered(node, isAppearing) {
    if (onEntered) {
      onEntered(node, isAppearing);
    }
  };
  var handleExit = function handleExit(node) {
    node.style[size] = "".concat(getWrapperSize(), "px");
    if (onExit) {
      onExit(node);
    }
  };
  var handleExited = onExited;
  var handleExiting = function handleExiting(node) {
    node.style[size] = collapsedSize;
    if (onExiting) {
      onExiting(node);
    }
  };
  var recalculate = function recalculate() {
    if (inProp && nodeRef.current) {
      if (wrapperRef.current && isHorizontal) {
        // Set absolute position to get the size of collapsed content
        wrapperRef.current.style.position = "absolute";
      }
      var wrapperSize = getWrapperSize();
      if (wrapperRef.current && isHorizontal) {
        // After the size is read reset the position back to default
        wrapperRef.current.style.position = "";
      }
      nodeRef.current.style[size] = "".concat(wrapperSize, "px");
    }
  };
  useEffect(function () {
    window.addEventListener("resize", recalculate);
    return function () {
      window.removeEventListener("resize", recalculate);
    };
  }, [inProp]);
  return /*#__PURE__*/_jsx(Animated, _objectSpread(_objectSpread({
    "in": inProp,
    animation: {
      entered: {
        overflow: "visible"
      },
      exited: !inProp && collapsedSize === "0px" ? {
        visibility: "hidden"
      } : {}
    },
    animatedProperties: isHorizontal ? "width" : "height",
    duration: duration,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting,
    onExited: handleExited
  }, animatedProps), {}, {
    ref: handleRef,
    children: /*#__PURE__*/_jsx(CollapseRoot, {
      style: _defineProperty({}, isHorizontal ? "minWidth" : "minHeight", collapsedSize),
      orientation: orientation,
      children: /*#__PURE__*/_jsx(CollapseWrapper, {
        orientation: orientation,
        ref: wrapperRef,
        children: /*#__PURE__*/_jsx(CollapseWrapperInner, {
          orientation: orientation,
          children: children
        })
      })
    })
  }));
});
Collapse.displayName = "Collapse";
export default Collapse;