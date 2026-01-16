import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["src", "alt", "className", "style", "SkeletonProps", "onLoad", "loading", "loadingMode", "fallback", "onError"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Skeleton } from "../Skeleton";
import { StyledImg } from "./Image.styles";
import { cx } from "@peersyst/react-utils";
import { useImageSrc, useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Image(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Image", props),
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
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useImageSrc = useImageSrc(srcProp, fallback, onLoad, onError),
    src = _useImageSrc.src,
    handleLoad = _useImageSrc.handleLoad,
    handleError = _useImageSrc.handleError,
    loaded = _useImageSrc.loaded;
  return /*#__PURE__*/_jsx(Skeleton, _objectSpread(_objectSpread({
    loading: !loaded || loading,
    className: className,
    style: style
  }, SkeletonProps), {}, {
    children: /*#__PURE__*/_jsx(StyledImg, _objectSpread({
      src: src,
      alt: alt,
      onLoad: handleLoad,
      onError: handleError,
      className: cx("Image", className),
      style: style,
      role: "img",
      loading: loadingMode
    }, rest), src)
  }));
}