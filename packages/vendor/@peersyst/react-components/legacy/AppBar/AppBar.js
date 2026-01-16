import { AppBarContent, AppBarRoot } from "./AppBar.styles";
import { useScrollTrigger } from "@peersyst/react-hooks";
import { Animated } from "../Animated";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function AppBar(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("AppBar", props),
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
  var hideTrigger = useScrollTrigger({
    threshold: hideOnScrollThreshold
  });
  var elevationTrigger = useScrollTrigger({
    threshold: onScrollElevationThreshold,
    disableHysteresis: true
  });
  var elevation = onScrollElevation !== undefined && elevationTrigger ? onScrollElevation : elevationProp;
  return /*#__PURE__*/_jsx(Animated.Slide, {
    direction: "down",
    duration: 300,
    "in": !hideOnScroll || !hideTrigger,
    appear: false,
    children: /*#__PURE__*/_jsx(AppBarRoot, {
      position: position,
      className: cx("AppBar", className),
      style: style,
      children: /*#__PURE__*/_jsx(AppBarContent, {
        elevation: elevation,
        className: "AppBarContent",
        children: children
      })
    })
  });
}