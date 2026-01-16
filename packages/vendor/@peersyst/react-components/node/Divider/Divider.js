"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Divider;
var _Divider = require("./Divider.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function Divider(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Divider", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps2 === void 0 ? "1px" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.width,
    width = _useMergeDefaultProps3 === void 0 ? "full-width" : _useMergeDefaultProps3,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    colorProp = _useMergeDefaultProps.color,
    children = _useMergeDefaultProps.children;
  var color = (0, _reactComponentsCore.useColor)(colorProp);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: children ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Divider.DividerWithChildren, {
      width: width,
      className: (0, _reactUtils.cx)("Divider", className),
      style: style,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.DividerRoot, {
        height: size,
        color: color,
        width: "full-width"
      }), children, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.DividerRoot, {
        height: size,
        color: color,
        width: "full-width"
      })]
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Divider.DividerRoot, {
      height: size,
      color: color,
      width: width,
      style: style,
      className: (0, _reactUtils.cx)("Divider", className)
    })
  });
}