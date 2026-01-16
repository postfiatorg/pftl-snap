import { flexRender } from "@tanstack/react-table";
import { TableHeadRoot, TableHeader, TableSortButton, TableHeaderTitle, TableHeaderContent, TableHeaderSortButtonContainer } from "./TableHead.styles";
import { useTable } from "../TableContext";
import { useTheme } from "@peersyst/react-components-core";
import { forwardRef } from "react";
import { setRef } from "@peersyst/react-utils";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var TableHead = /*#__PURE__*/forwardRef(function TableHead(_, _ref) {
  var _ChevronDown, _ChevronUp;
  var _useTheme = useTheme(),
    _useTheme$icons = _useTheme.icons,
    ChevronDown = _useTheme$icons.chevronDown,
    ChevronUp = _useTheme$icons.chevronUp;
  var _useTable = useTable(),
    table = _useTable.table;
  var headerGroups = table.getHeaderGroups();
  return /*#__PURE__*/_jsx(TableHeadRoot, {
    className: "TableHead",
    ref: function ref(r) {
      return setRef(_ref, r);
    },
    children: headerGroups.map(function (headerGroup) {
      return /*#__PURE__*/_jsx("tr", {
        className: "TableRow TableHeadRow",
        children: headerGroup.headers.map(function (header) {
          var headerContext = header.getContext();
          var column = header.column;
          var columnDef = column.columnDef;
          var canSort = column.getCanSort();
          var sorting = column.getIsSorted();
          var alignment = columnDef.alignHeader || columnDef.align || "left";
          return /*#__PURE__*/_jsx(TableHeader, {
            className: "TableHeader",
            colSpan: header.colSpan,
            style: {
              width: header.getSize()
            },
            canSort: canSort,
            onClick: header.column.getToggleSortingHandler(),
            children: /*#__PURE__*/_jsxs(TableHeaderContent, {
              alignment: alignment,
              alignItems: "center",
              gap: "0.25rem",
              children: [/*#__PURE__*/_jsx(TableHeaderTitle, {
                alignment: alignment,
                children: flexRender(columnDef.header, headerContext)
              }), canSort && /*#__PURE__*/_jsx(TableHeaderSortButtonContainer, {
                isSorted: !!sorting,
                className: "TableHeaderSortButtonContainer",
                children: /*#__PURE__*/_jsx(TableSortButton, {
                  className: "TableHeaderSortButton",
                  active: !!sorting,
                  children: sorting === "desc" ? _ChevronDown || (_ChevronDown = /*#__PURE__*/_jsx(ChevronDown, {})) : _ChevronUp || (_ChevronUp = /*#__PURE__*/_jsx(ChevronUp, {}))
                })
              })]
            })
          }, header.id);
        })
      }, headerGroup.id);
    })
  });
});
export default TableHead;