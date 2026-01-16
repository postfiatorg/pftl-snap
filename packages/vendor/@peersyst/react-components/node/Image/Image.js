"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Image;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _Skeleton = require("../Skeleton");
var _Image = require("./Image.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["src", "alt", "className", "style", "SkeletonProps", "onLoad", "loading", "loadingMode", "fallback", "onError"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Image(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Image", props),
    srcProp = _useMergeDefaultProps.src,
    alt = _useMergeDefaultProps.alt,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    SkeletonProps = _useMergeDefaultProps.SkeletonProps,
    onLoad = _useMergeDefaultProps.onLoad,
    _useMergeDefaultProps2 = _useMergeDefaultProps.loading,
    loading = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    loadingMode = _useMergeDefaultProps.loadingMode,
    fallback = _useMergeDefaultProps.fallback,
    onError = _useMergeDefaultProps.onError,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useImageSrc = (0, _reactComponentsCore.useImageSrc)(srcProp, fallback, onLoad, onError),
    src = _useImageSrc.src,
    handleLoad = _useImageSrc.handleLoad,
    handleError = _useImageSrc.handleError,
    loaded = _useImageSrc.loaded;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton.Skeleton, _objectSpread(_objectSpread({
    loading: !loaded || loading,
    className: className,
    style: style
  }, SkeletonProps), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.StyledImg, _objectSpread({
      src: src,
      alt: alt,
      onLoad: handleLoad,
      onError: handleError,
      className: (0, _reactUtils.cx)("Image", className),
      style: style,
      role: "img",
      loading: loadingMode
    }, rest), src)
  }));
}