import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _TableBody;
var _excluded = ["footer", "className", "style", "loading", "noRowsElement", "rowCount", "onSortingChange", "state", "data", "autoResetPageIndex", "sorting"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createColumnHelper, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { forwardRef, useEffect, useRef, useState } from "react";
import { setRef } from "@peersyst/react-utils";
import { TableRoot, TableElement, TableContainer } from "./Table.styles";
import clsx from "clsx";
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";
import { TableProvider } from "./TableContext";
import { TableLoadingOverlay } from "./TableLoadingOverlay";
import { TableNoRowsOverlay } from "./TableNoRowsOverlay";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { useControlled } from "@peersyst/react-hooks";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var InnerTable = /*#__PURE__*/forwardRef(function InnerTable(props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("Table", props),
    footer = _useMergeDefaultProps.footer,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps2 = _useMergeDefaultProps.loading,
    loading = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    noRowsElement = _useMergeDefaultProps.noRowsElement,
    rowCount = _useMergeDefaultProps.rowCount,
    onSortingChange = _useMergeDefaultProps.onSortingChange,
    state = _useMergeDefaultProps.state,
    data = _useMergeDefaultProps.data,
    _useMergeDefaultProps3 = _useMergeDefaultProps.autoResetPageIndex,
    autoResetPageIndex = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    sortingProp = _useMergeDefaultProps.sorting,
    tableOptions = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var containerRef = useRef();
  var headerRef = useRef();
  var _useControlled = useControlled([], sortingProp, sortingProp ? onSortingChange : undefined),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    sorting = _useControlled2[0],
    setSorting = _useControlled2[1];
  var handleSortingChange = function handleSortingChange(updater) {
    var sortingState = typeof updater === "function" ? updater(sorting) : updater;
    setSorting(sortingState);
  };
  var table = useReactTable(_objectSpread({
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: handleSortingChange,
    state: _objectSpread(_objectSpread({}, state), {}, {
      sorting: (state == null ? void 0 : state.sorting) || sorting
    }),
    data: data,
    autoResetPageIndex: autoResetPageIndex
  }, tableOptions));
  var rows = table.getRowModel().rows;
  var _useState = useState({
      table: table,
      data: data,
      rowCount: rowCount
    }),
    _useState2 = _slicedToArray(_useState, 2),
    context = _useState2[0],
    setContext = _useState2[1];
  useEffect(function () {
    setContext({
      table: table,
      data: data,
      rowCount: rowCount
    });
  }, [table, data, rowCount]);
  return /*#__PURE__*/_jsx(TableRoot, {
    className: clsx("TableRoot", className),
    ref: ref,
    style: style,
    children: /*#__PURE__*/_jsxs(TableProvider, {
      value: context,
      children: [/*#__PURE__*/_jsx(TableContainer, {
        className: "TableContainer",
        ref: function ref(r) {
          return setRef(containerRef, r);
        },
        children: /*#__PURE__*/_jsxs(TableElement, {
          className: "Table",
          children: [/*#__PURE__*/_jsx(TableHead, {
            ref: headerRef
          }), _TableBody || (_TableBody = /*#__PURE__*/_jsx(TableBody, {}))]
        })
      }), !loading && !rows.length && /*#__PURE__*/_jsx(TableNoRowsOverlay, {
        containerRef: containerRef,
        headerRef: headerRef,
        noRowsElement: noRowsElement
      }), /*#__PURE__*/_jsx(TableLoadingOverlay, {
        containerRef: containerRef,
        headerRef: headerRef,
        loading: loading
      }), footer && /*#__PURE__*/_jsx(TableFooter, {
        children: footer
      })]
    })
  });
});
function Table(props) {
  return /*#__PURE__*/_jsx(InnerTable, _objectSpread({}, props));
}
Table.createColumnHelper = createColumnHelper;
export default Table;