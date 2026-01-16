"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Skeleton;
var _Skeleton = require("./Skeleton.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function Skeleton(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Skeleton", props),
    width = _useMergeDefaultProps.width,
    height = _useMergeDefaultProps.height,
    _useMergeDefaultProps2 = _useMergeDefaultProps.shape,
    shape = _useMergeDefaultProps2 === void 0 ? "stadium" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.animation,
    animation = _useMergeDefaultProps3 === void 0 ? "wave" : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.loading,
    loading = _useMergeDefaultProps4 === void 0 ? true : _useMergeDefaultProps4,
    appearance = _useMergeDefaultProps.appearance,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton.SkeletonRoot, {
    width: width,
    height: height,
    shape: shape,
    animation: animation,
    isLoading: loading,
    appearance: appearance,
    className: (0, _reactUtils.cx)("Skeleton", className),
    style: style,
    children: children
  });
}