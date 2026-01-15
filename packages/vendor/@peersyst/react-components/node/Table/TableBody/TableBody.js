"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactTable = require("@tanstack/react-table");
var _TableBody = require("./TableBody.styles");
var _TableContext = require("../TableContext");
var _react = require("react");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
var TableBody = /*#__PURE__*/(0, _react.forwardRef)(function TableBody(_, _ref) {
  var _useTable = (0, _TableContext.useTable)(),
    table = _useTable.table;
  var rows = table.getRowModel().rows;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableBody.TableBodyRoot, {
    ref: function ref(r) {
      return (0, _reactUtils.setRef)(_ref, r);
    },
    className: "TableBody",
    children: rows.map(function (row) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
        className: "TableRow TableBodyRow",
        children: row.getVisibleCells().map(function (cell) {
          var cellContext = cell.getContext();
          var columnDef = cellContext.column.columnDef;
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
            className: "TableCell",
            style: {
              textAlign: columnDef.alignCells || columnDef.align
            },
            children: (0, _reactTable.flexRender)(cell.column.columnDef.cell, cell.getContext())
          }, cell.id);
        })
      }, row.id);
    })
  });
});
var _default = exports["default"] = TableBody;