import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["Pagination", "Count", "state", "pageSize", "pageIndex", "onPaginationChange", "data", "getPaginationRowModel", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { PaginatedTableFooter } from "./PaginatedTableFooter";
import { PaginatedTableRoot } from "./PaginatedTable.styles";
import { getPaginationRowModel as reactTableGetPaginationRowModel } from "@tanstack/react-table";
import { useRef, useState } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import clsx from "clsx";
import { jsx as _jsx } from "react/jsx-runtime";
var PaginatedTable = function PaginatedTable(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("PaginatedTable", props),
    Pagination = _useMergeDefaultProps.Pagination,
    Count = _useMergeDefaultProps.Count,
    state = _useMergeDefaultProps.state,
    pageSize = _useMergeDefaultProps.pageSize,
    pageIndexProp = _useMergeDefaultProps.pageIndex,
    onPaginationChange = _useMergeDefaultProps.onPaginationChange,
    data = _useMergeDefaultProps.data,
    getPaginationRowModelProp = _useMergeDefaultProps.getPaginationRowModel,
    className = _useMergeDefaultProps.className,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var getPaginationRowModel = useRef(getPaginationRowModelProp || reactTableGetPaginationRowModel()).current;
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    pageIndexState = _useState2[0],
    setPageIndexState = _useState2[1];
  var pageIndex = pageIndexProp != null ? pageIndexProp : pageIndexState;
  var handlePaginationChange = function handlePaginationChange(updater) {
    var paginationState = typeof updater === "function" ? updater({
      pageIndex: pageIndex,
      pageSize: pageSize
    }) : updater;
    onPaginationChange == null || onPaginationChange(paginationState);
    if (!pageIndexProp) setPageIndexState(paginationState.pageIndex);
  };
  return /*#__PURE__*/_jsx(PaginatedTableRoot, _objectSpread({
    footer: /*#__PURE__*/_jsx(PaginatedTableFooter, {
      Pagination: Pagination,
      Count: Count
    }),
    data: data,
    state: _objectSpread(_objectSpread({}, state), {}, {
      pagination: (state == null ? void 0 : state.pagination) || {
        pageIndex: pageIndex,
        pageSize: pageSize
      }
    }),
    getPaginationRowModel: getPaginationRowModel,
    onPaginationChange: handlePaginationChange,
    className: clsx("PaginatedTable", className)
  }, rest));
};
export default PaginatedTable;