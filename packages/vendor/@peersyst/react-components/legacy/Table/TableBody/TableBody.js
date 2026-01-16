import { flexRender } from "@tanstack/react-table";
import { TableBodyRoot } from "./TableBody.styles";
import { useTable } from "../TableContext";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";
import { jsx as _jsx } from "react/jsx-runtime";
var TableBody = /*#__PURE__*/forwardRef(function TableBody(_, _ref) {
  var _useTable = useTable(),
    table = _useTable.table;
  var rows = table.getRowModel().rows;
  return /*#__PURE__*/_jsx(TableBodyRoot, {
    ref: function ref(r) {
      return setRef(_ref, r);
    },
    className: "TableBody",
    children: rows.map(function (row) {
      return /*#__PURE__*/_jsx("tr", {
        className: "TableRow TableBodyRow",
        children: row.getVisibleCells().map(function (cell) {
          var cellContext = cell.getContext();
          var columnDef = cellContext.column.columnDef;
          return /*#__PURE__*/_jsx("td", {
            className: "TableCell",
            style: {
              textAlign: columnDef.alignCells || columnDef.align
            },
            children: flexRender(cell.column.columnDef.cell, cell.getContext())
          }, cell.id);
        })
      }, row.id);
    })
  });
});
export default TableBody;