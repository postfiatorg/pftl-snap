"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectMenu;
var _SelectMenu = require("./SelectMenu.styles");
var _Animated = require("../../Animated");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function SelectMenu(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("SelectMenu", props),
    open = _useMergeDefaultProps.open,
    expandable = _useMergeDefaultProps.expandable,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated.Animated.FadingSlide, {
    direction: "down",
    duration: 100,
    "in": open,
    unmountOnExit: true,
    mountOnEnter: true,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectMenu.SelectMenuRoot, {
      expandable: expandable,
      className: (0, _reactUtils.cx)("SelectMenu", className),
      style: style,
      elevation: 6,
      children: children
    })
  });
}