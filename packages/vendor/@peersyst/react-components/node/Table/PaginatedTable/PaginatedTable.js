"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _PaginatedTableFooter = require("./PaginatedTableFooter");
var _PaginatedTable = require("./PaginatedTable.styles");
var _reactTable = require("@tanstack/react-table");
var _react = require("react");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["Pagination", "Count", "state", "pageSize", "pageIndex", "onPaginationChange", "data", "getPaginationRowModel", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PaginatedTable = function PaginatedTable(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("PaginatedTable", props),
    Pagination = _useMergeDefaultProps.Pagination,
    Count = _useMergeDefaultProps.Count,
    state = _useMergeDefaultProps.state,
    pageSize = _useMergeDefaultProps.pageSize,
    pageIndexProp = _useMergeDefaultProps.pageIndex,
    onPaginationChange = _useMergeDefaultProps.onPaginationChange,
    data = _useMergeDefaultProps.data,
    getPaginationRowModelProp = _useMergeDefaultProps.getPaginationRowModel,
    className = _useMergeDefaultProps.className,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var getPaginationRowModel = (0, _react.useRef)(getPaginationRowModelProp || (0, _reactTable.getPaginationRowModel)()).current;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaginatedTable.PaginatedTableRoot, _objectSpread({
    footer: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaginatedTableFooter.PaginatedTableFooter, {
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
    className: (0, _clsx["default"])("PaginatedTable", className)
  }, rest));
};
var _default = exports["default"] = PaginatedTable;