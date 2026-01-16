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
var _reactHooks = require("@peersyst/react-hooks");
var _Collapse = require("./Collapse.styles");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["in", "orientation", "collapsedSize", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "children", "duration"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Collapse = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("AnimatedCollapse", props),
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
    animatedProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var collapsedSize = typeof collapsedSizeProp === "number" ? "".concat(collapsedSizeProp, "px") : collapsedSizeProp;
  var isHorizontal = orientation === "horizontal";
  var size = isHorizontal ? "width" : "height";
  var wrapperRef = (0, _react.useRef)(null);
  var nodeRef = (0, _react.useRef)(null);
  var handleRef = (0, _reactHooks.useForkRef)(ref, nodeRef);
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
  (0, _react.useEffect)(function () {
    window.addEventListener("resize", recalculate);
    return function () {
      window.removeEventListener("resize", recalculate);
    };
  }, [inProp]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated["default"], _objectSpread(_objectSpread({
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
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Collapse.CollapseRoot, {
      style: (0, _defineProperty2["default"])({}, isHorizontal ? "minWidth" : "minHeight", collapsedSize),
      orientation: orientation,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Collapse.CollapseWrapper, {
        orientation: orientation,
        ref: wrapperRef,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Collapse.CollapseWrapperInner, {
          orientation: orientation,
          children: children
        })
      })
    })
  }));
});
Collapse.displayName = "Collapse";
var _default = exports["default"] = Collapse;