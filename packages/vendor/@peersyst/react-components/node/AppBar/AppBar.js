"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppBar;
var _AppBar = require("./AppBar.styles");
var _reactHooks = require("@peersyst/react-hooks");
var _Animated = require("../Animated");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function AppBar(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("AppBar", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.position,
    position = _useMergeDefaultProps2 === void 0 ? "static" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.elevation,
    elevationProp = _useMergeDefaultProps3 === void 0 ? 8 : _useMergeDefaultProps3,
    onScrollElevation = _useMergeDefaultProps.onScrollElevation,
    _useMergeDefaultProps4 = _useMergeDefaultProps.onScrollElevationThreshold,
    onScrollElevationThreshold = _useMergeDefaultProps4 === void 0 ? 0 : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.hideOnScroll,
    hideOnScroll = _useMergeDefaultProps5 === void 0 ? false : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.hideOnScrollThreshold,
    hideOnScrollThreshold = _useMergeDefaultProps6 === void 0 ? 100 : _useMergeDefaultProps6,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var hideTrigger = (0, _reactHooks.useScrollTrigger)({
    threshold: hideOnScrollThreshold
  });
  var elevationTrigger = (0, _reactHooks.useScrollTrigger)({
    threshold: onScrollElevationThreshold,
    disableHysteresis: true
  });
  var elevation = onScrollElevation !== undefined && elevationTrigger ? onScrollElevation : elevationProp;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated.Animated.Slide, {
    direction: "down",
    duration: 300,
    "in": !hideOnScroll || !hideTrigger,
    appear: false,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.AppBarRoot, {
      position: position,
      className: (0, _reactUtils.cx)("AppBar", className),
      style: style,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppBar.AppBarContent, {
        elevation: elevation,
        className: "AppBarContent",
        children: children
      })
    })
  });
}