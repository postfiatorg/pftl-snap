import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ExpandableProvider } from "./ExpandableContext";
import { ExpandableDisplay } from "./ExpandableDisplay";
import { ExpandableBody, ExpandableHeader, ExpandableContent, ExpandableFooter } from "./ExpandableBody";
import { findSlot, cx } from "@peersyst/react-utils";
import { ExpandableRoot } from "./Expandable.styles";
import { useControlled } from "@peersyst/react-hooks";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
var Expandable = function Expandable(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Expandable", props),
    openProp = _useMergeDefaultProps.open,
    onOpen = _useMergeDefaultProps.onOpen,
    onClose = _useMergeDefaultProps.onClose,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var display = findSlot(children, ExpandableDisplay);
  var body = findSlot(children, ExpandableBody);
  var _useControlled = useControlled(false, openProp, openProp ? onClose : onOpen),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  return /*#__PURE__*/_jsx(ExpandableRoot, {
    className: cx("Expandable", open && "Open", className),
    style: style,
    children: /*#__PURE__*/_jsxs(ExpandableProvider, {
      value: {
        open: open,
        toggle: function toggle() {
          return setOpen(!open);
        }
      },
      children: [display, body]
    })
  });
};
Expandable.Display = ExpandableDisplay;
Expandable.Body = ExpandableBody;
Expandable.Header = ExpandableHeader;
Expandable.Content = ExpandableContent;
Expandable.Footer = ExpandableFooter;
export default Expandable;