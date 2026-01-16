"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _TablePagination = require("../TablePagination");
var _TableCount = require("../TableCount");
var _hooks = require("../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function PaginatedTableFooter(_ref) {
  var _ref$Pagination = _ref.Pagination,
    Pagination = _ref$Pagination === void 0 ? _TablePagination.TablePagination : _ref$Pagination,
    _ref$Count = _ref.Count,
    Count = _ref$Count === void 0 ? _TableCount.TableCount : _ref$Count;
  var _usePaginatedTable = (0, _hooks.usePaginatedTable)(),
    table = _usePaginatedTable.table,
    totalRows = _usePaginatedTable.totalRows,
    totalPages = _usePaginatedTable.totalPages,
    currentPage = _usePaginatedTable.currentPage,
    currentRange = _usePaginatedTable.currentRange;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Count, {
      range: currentRange,
      total: totalRows
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Pagination, {
      onPageChange: function onPageChange(pageIndex) {
        return table.setPageIndex(pageIndex - 1);
      },
      currentPage: currentPage,
      totalPages: totalPages
    })]
  });
}
var _default = exports["default"] = PaginatedTableFooter;