"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _clsx = _interopRequireDefault(require("clsx"));
var _TablePagination = require("./TablePagination.styles");
var _jsxRuntime = require("react/jsx-runtime");
var TablePagination = function TablePagination(_ref) {
  var currentPage = _ref.currentPage,
    totalPages = _ref.totalPages,
    onPageChange = _ref.onPageChange,
    style = _ref.style,
    className = _ref.className;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TablePagination.TablePaginationRoot, {
    page: currentPage,
    onChange: onPageChange,
    count: totalPages,
    style: style,
    className: (0, _clsx["default"])("TablePagination", className),
    siblingCount: 0,
    boundaryCount: 0,
    size: "lg"
  });
};
var _default = exports["default"] = TablePagination;