import { TablePagination } from "../TablePagination";
import { TableCount } from "../TableCount";
import { usePaginatedTable } from "../hooks";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
function PaginatedTableFooter(_ref) {
  var _ref$Pagination = _ref.Pagination,
    Pagination = _ref$Pagination === void 0 ? TablePagination : _ref$Pagination,
    _ref$Count = _ref.Count,
    Count = _ref$Count === void 0 ? TableCount : _ref$Count;
  var _usePaginatedTable = usePaginatedTable(),
    table = _usePaginatedTable.table,
    totalRows = _usePaginatedTable.totalRows,
    totalPages = _usePaginatedTable.totalPages,
    currentPage = _usePaginatedTable.currentPage,
    currentRange = _usePaginatedTable.currentRange;
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [/*#__PURE__*/_jsx(Count, {
      range: currentRange,
      total: totalRows
    }), /*#__PURE__*/_jsx(Pagination, {
      onPageChange: function onPageChange(pageIndex) {
        return table.setPageIndex(pageIndex - 1);
      },
      currentPage: currentPage,
      totalPages: totalPages
    })]
  });
}
export default PaginatedTableFooter;