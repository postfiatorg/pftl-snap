import { SkeletonRoot } from "./Skeleton.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Skeleton(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Skeleton", props),
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
  return /*#__PURE__*/_jsx(SkeletonRoot, {
    width: width,
    height: height,
    shape: shape,
    animation: animation,
    isLoading: loading,
    appearance: appearance,
    className: cx("Skeleton", className),
    style: style,
    children: children
  });
}