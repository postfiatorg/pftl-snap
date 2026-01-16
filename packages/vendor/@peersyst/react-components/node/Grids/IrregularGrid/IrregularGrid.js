"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _IrregularGrid = require("./IrregularGrid.styles");
var _hook = require("../hook");
var _util = require("../util");
var _jsxRuntime = require("react/jsx-runtime");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var IrregularGrid = function IrregularGrid(props) {
  var _useGridState = (0, _hook.useGridState)(),
    _useGridState2 = (0, _slicedToArray2["default"])(_useGridState, 2),
    gridState = _useGridState2[0],
    setGridState = _useGridState2[1];
  var _useState = (0, _react.useState)([]),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    pattern = _useState2[0],
    setPattern = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    cells = _useState4[0],
    setCells = _useState4[1];
  var sortedBreakpoints = (0, _hook.useSortedBreakpoints)(props.breakpoints, {
    pattern: props.pattern,
    rowSize: props.rowSize,
    colGap: props.colGap,
    rowGap: props.rowGap,
    cols: props.cols,
    alignItems: props.alignItems,
    justifyItems: props.justifyItems,
    justifyContent: props.justifyContent
  });
  (0, _react.useEffect)(function () {
    var cells = (0, _toConsumableArray2["default"])(Array(gridState.columns)).reduce(function (p, _c, i) {
      return p + (0, _util.getColFlex)(pattern[i]);
    }, 0);
    setCells(cells);
  }, [pattern]);
  var setPatterns = function setPatterns(reset) {
    var width = document.documentElement.clientWidth;
    var columns = props.cols;
    var pattern = props.pattern;
    var rowSize = props.rowSize;
    var colGap = props.colGap;
    var rowGap = props.rowGap;
    var alignItems = props.alignItems;
    var justifyItems = props.justifyItems;
    var justifyContent = props.justifyContent;
    var activeBreakpoint;
    var _iterator = _createForOfIteratorHelper(sortedBreakpoints),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var breakpoint = _step.value;
        if (width < breakpoint.maxWidth) {
          columns = breakpoint.cols;
          pattern = breakpoint.pattern;
          rowSize = (0, _util.getRowSize)(breakpoint, gridState.activeBreakpoint, gridState.rowSize, props.rowSize);
          colGap = (0, _util.getColGap)(breakpoint, gridState.activeBreakpoint, gridState.colGap, props.colGap);
          rowGap = (0, _util.getRowGap)(breakpoint, gridState.activeBreakpoint, gridState.rowGap, props.rowGap);
          if (breakpoint.alignItems) alignItems = breakpoint.alignItems;
          if (breakpoint.justifyItems) justifyItems = breakpoint.justifyItems;
          if (breakpoint.justifyContent) justifyContent = breakpoint.justifyContent;
          activeBreakpoint = breakpoint.maxWidth;
          break;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    if (reset || activeBreakpoint !== gridState.activeBreakpoint) {
      setGridState({
        activeBreakpoint: activeBreakpoint,
        rowGap: rowGap,
        rowSize: rowSize,
        colGap: colGap,
        columns: columns,
        alignItems: alignItems,
        justifyItems: justifyItems,
        justifyContent: justifyContent
      });
      setPattern(pattern);
    }
  };
  (0, _hook.useGridResize)(setPatterns, sortedBreakpoints, gridState);
  var renderElements = function renderElements() {
    var length = pattern.length;
    return _react.Children.map(props.children, function (child, index) {
      var element = pattern[index % length];
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: child && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: {
            gridColumnEnd: "span " + (0, _util.getColFlex)(element),
            gridRowEnd: "span " + (0, _util.getRowFlex)(element)
          },
          children: child
        }, index.toString())
      });
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_IrregularGrid.IrregularGridRoot, {
    cells: cells,
    rowSize: gridState.rowSize,
    colGap: gridState.colGap,
    rowGap: gridState.rowGap,
    alignItems: gridState.alignItems,
    justifyItems: gridState.justifyItems,
    justifyContent: gridState.justifyContent,
    className: props.className,
    style: props.style,
    role: "grid",
    children: pattern.length > 0 && renderElements()
  });
};
var _default = exports["default"] = IrregularGrid;