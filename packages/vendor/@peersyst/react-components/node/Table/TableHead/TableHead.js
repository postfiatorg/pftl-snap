"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactTable = require("@tanstack/react-table");
var _TableHead = require("./TableHead.styles");
var _TableContext = require("../TableContext");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _react = require("react");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
var TableHead = /*#__PURE__*/(0, _react.forwardRef)(function TableHead(_, _ref) {
  var _ChevronDown, _ChevronUp;
  var _useTheme = (0, _reactComponentsCore.useTheme)(),
    _useTheme$icons = _useTheme.icons,
    ChevronDown = _useTheme$icons.chevronDown,
    ChevronUp = _useTheme$icons.chevronUp;
  var _useTable = (0, _TableContext.useTable)(),
    table = _useTable.table;
  var headerGroups = table.getHeaderGroups();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableHead.TableHeadRoot, {
    className: "TableHead",
    ref: function ref(r) {
      return (0, _reactUtils.setRef)(_ref, r);
    },
    children: headerGroups.map(function (headerGroup) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
        className: "TableRow TableHeadRow",
        children: headerGroup.headers.map(function (header) {
          var headerContext = header.getContext();
          var column = header.column;
          var columnDef = column.columnDef;
          var canSort = column.getCanSort();
          var sorting = column.getIsSorted();
          var alignment = columnDef.alignHeader || columnDef.align || "left";
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableHead.TableHeader, {
            className: "TableHeader",
            colSpan: header.colSpan,
            style: {
              width: header.getSize()
            },
            canSort: canSort,
            onClick: header.column.getToggleSortingHandler(),
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TableHead.TableHeaderContent, {
              alignment: alignment,
              alignItems: "center",
              gap: "0.25rem",
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TableHead.TableHeaderTitle, {
                alignment: alignment,
                children: (0, _reactTable.flexRender)(columnDef.header, headerContext)
              }), canSort && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableHead.TableHeaderSortButtonContainer, {
                isSorted: !!sorting,
                className: "TableHeaderSortButtonContainer",
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableHead.TableSortButton, {
                  className: "TableHeaderSortButton",
                  active: !!sorting,
                  children: sorting === "desc" ? _ChevronDown || (_ChevronDown = /*#__PURE__*/(0, _jsxRuntime.jsx)(ChevronDown, {})) : _ChevronUp || (_ChevronUp = /*#__PURE__*/(0, _jsxRuntime.jsx)(ChevronUp, {}))
                })
              })]
            })
          }, header.id);
        })
      }, headerGroup.id);
    })
  });
});
var _default = exports["default"] = TableHead;