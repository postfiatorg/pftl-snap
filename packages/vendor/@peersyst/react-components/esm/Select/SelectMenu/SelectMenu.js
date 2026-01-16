import { SelectMenuRoot } from "./SelectMenu.styles";
import { Animated } from "../../Animated";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
export default function SelectMenu(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("SelectMenu", props),
    open = _useMergeDefaultProps.open,
    expandable = _useMergeDefaultProps.expandable,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  return /*#__PURE__*/_jsx(Animated.FadingSlide, {
    direction: "down",
    duration: 100,
    "in": open,
    unmountOnExit: true,
    mountOnEnter: true,
    children: /*#__PURE__*/_jsx(SelectMenuRoot, {
      expandable: expandable,
      className: cx("SelectMenu", className),
      style: style,
      elevation: 6,
      children: children
    })
  });
}