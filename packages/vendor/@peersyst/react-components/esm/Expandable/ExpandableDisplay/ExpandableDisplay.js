import { useContext } from "react";
import { ExpandableContext } from "../ExpandableContext";
import { ExpandableDisplayRoot, ExpandableDropdown } from "./ExpandableDisplay.styles";
import { fsx, cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ExpandableDisplay(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("ExpandableDisplay", props),
    reverse = _useMergeDefaultProps.reverse,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children,
    _useMergeDefaultProps2 = _useMergeDefaultProps.ExpandComponent,
    ExpandComponent = _useMergeDefaultProps2 === void 0 ? ExpandableDropdown : _useMergeDefaultProps2;
  var _useContext = useContext(ExpandableContext),
    toggle = _useContext.toggle,
    open = _useContext.open;
  var styleProps = {
    open: open
  };
  return /*#__PURE__*/_jsxs(ExpandableDisplayRoot, {
    className: cx(className, "ExpandableDisplay", open && "Open"),
    style: fsx(style, styleProps),
    onClick: function onClick() {
      return toggle();
    },
    reverse: !!reverse,
    children: [children, ExpandComponent && /*#__PURE__*/_jsx(ExpandComponent, {
      open: open
    })]
  });
}