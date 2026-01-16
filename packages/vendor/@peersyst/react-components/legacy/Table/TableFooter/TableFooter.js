import { TableFooterRoot } from "./TableFooter.styles";
import clsx from "clsx";
import { jsx as _jsx } from "react/jsx-runtime";
function TableFooter(_ref) {
  var children = _ref.children,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/_jsx(TableFooterRoot, {
    className: clsx("TableFooter", className),
    style: style,
    children: children
  });
}
export default TableFooter;