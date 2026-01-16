import { ExpandableHeaderRoot } from "./ExpandableHeader.styles";
import { cx } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ExpandableHeader(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/_jsx(ExpandableHeaderRoot, {
    className: cx("ExpandableHeader", className),
    style: style,
    children: children
  });
}