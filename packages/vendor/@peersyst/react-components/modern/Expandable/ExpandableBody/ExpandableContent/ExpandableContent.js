import { ExpandableContentRoot } from "./ExpandableContent.styles";
import { cx } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ExpandableContent(_ref) {
  var children = _ref.children,
    style = _ref.style,
    className = _ref.className;
  return /*#__PURE__*/_jsx(ExpandableContentRoot, {
    className: cx("ExpandableContent", className),
    style: style,
    children: children
  });
}