import clsx from "clsx";
import { TablePaginationRoot } from "./TablePagination.styles";
import { jsx as _jsx } from "react/jsx-runtime";
var TablePagination = function TablePagination(_ref) {
  var currentPage = _ref.currentPage,
    totalPages = _ref.totalPages,
    onPageChange = _ref.onPageChange,
    style = _ref.style,
    className = _ref.className;
  return /*#__PURE__*/_jsx(TablePaginationRoot, {
    page: currentPage,
    onChange: onPageChange,
    count: totalPages,
    style: style,
    className: clsx("TablePagination", className),
    siblingCount: 0,
    boundaryCount: 0,
    size: "lg"
  });
};
export default TablePagination;