"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reactTable = require("@tanstack/react-table");
var _react = require("react");
var _reactUtils = require("@peersyst/react-utils");
var _Table = require("./Table.styles");
var _clsx = _interopRequireDefault(require("clsx"));
var _TableHead = require("./TableHead");
var _TableBody2 = require("./TableBody");
var _TableFooter = require("./TableFooter");
var _TableContext = require("./TableContext");
var _TableLoadingOverlay = require("./TableLoadingOverlay");
var _TableNoRowsOverlay = require("./TableNoRowsOverlay");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _reactHooks = require("@peersyst/react-hooks");
var _jsxRuntime = require("react/jsx-runtime");
var _TableBody;
var _excluded = ["footer", "className", "style", "loading", "noRowsElement", "rowCount", "onSortingChange", "state", "data", "autoResetPageIndex", "sorting"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var InnerTable = /*#__PURE__*/(0, _react.forwardRef)(function InnerTable(props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Table", props),
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
    tableOptions = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var containerRef = (0, _react.useRef)();
  var headerRef = (0, _react.useRef)();
  var _useControlled = (0, _reactHooks.useControlled)([], sortingProp, sortingProp ? onSortingChange : undefined),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    sorting = _useControlled2[0],
    setSorting = _useControlled2[1];
  var handleSortingChange = function handleSortingChange(updater) {
    var sortingState = typeof updater === "function" ? updater(sorting) : updater;
    setSorting(sortingState);
  };
  var table = (0, _reactTable.useReactTable)(_objectSpread({
    getCoreRowModel: (0, _reactTable.getCoreRowModel)(),
    getSortedRowModel: (0, _reactTable.getSortedRowModel)(),
    onSortingChange: handleSortingChange,
    state: _objectSpread(_objectSpread({}, state), {}, {
      sorting: (state == null ? void 0 : state.sorting) || sorting
    }),
    data: data,
    autoResetPageIndex: autoResetPageIndex
  }, tableOptions));
  var rows = table.getRowModel().rows;
  var _useState = (0, _react.useState)({
      table: table,
      data: data,
      rowCount: rowCount
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    context = _useState2[0],
    setContext = _useState2[1];
  (0, _react.useEffect)(function () {
    setContext({
      table: table,
      data: data,
      rowCount: rowCount
    });
  }, [table, data, rowCount]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.TableRoot, {
    className: (0, _clsx["default"])("TableRoot", className),
    ref: ref,
    style: style,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_TableContext.TableProvider, {
      value: context,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Table.TableContainer, {
        className: "TableContainer",
        ref: function ref(r) {
          return (0, _reactUtils.setRef)(containerRef, r);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Table.TableElement, {
          className: "Table",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TableHead.TableHead, {
            ref: headerRef
          }), _TableBody || (_TableBody = /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableBody2.TableBody, {}))]
        })
      }), !loading && !rows.length && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableNoRowsOverlay.TableNoRowsOverlay, {
        containerRef: containerRef,
        headerRef: headerRef,
        noRowsElement: noRowsElement
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableLoadingOverlay.TableLoadingOverlay, {
        containerRef: containerRef,
        headerRef: headerRef,
        loading: loading
      }), footer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableFooter.TableFooter, {
        children: footer
      })]
    })
  });
});
function Table(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerTable, _objectSpread({}, props));
}
Table.createColumnHelper = _reactTable.createColumnHelper;
var _default = exports["default"] = Table;