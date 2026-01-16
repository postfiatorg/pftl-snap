import { ExpandableConsumer } from "../ExpandableContext";
import { ExpandableFooter } from "./ExpandableFooter";
import { ExpandableHeader } from "./ExpandableHeader";
import { ExpandableContent } from "./ExpandableContent";
import { findSlot, cx } from "@peersyst/react-utils";
import { ExpandableBodyRoot } from "./ExpandableBody.styles";
import { Animated } from "../../Animated";
import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
export default function ExpandableBody(_ref) {
  var className = _ref.className,
    style = _ref.style,
    children = _ref.children;
  var header = findSlot(children, ExpandableHeader);
  var content = findSlot(children, ExpandableContent);
  var footer = findSlot(children, ExpandableFooter);
  return /*#__PURE__*/_jsx(ExpandableConsumer, {
    children: function children(_ref2) {
      var open = _ref2.open;
      return /*#__PURE__*/_jsx(Animated.Collapse, {
        "in": open,
        children: /*#__PURE__*/_jsxs(ExpandableBodyRoot, {
          className: cx("ExpandableBody", className),
          style: style,
          children: [header, content, footer]
        })
      });
    }
  });
}