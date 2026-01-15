import { ExpandableFooterRoot } from "./ExpandableFooter.styles";
import { cx } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ExpandableFooter(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/_jsx(ExpandableFooterRoot, {
    className: cx("ExpandableFooter", className),
    style: style,
    children: children
  });
}