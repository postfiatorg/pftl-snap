"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabIndicator;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _TabIndicator = require("./TabIndicator.styles");
var _TabsContext = require("../../TabsContext");
var _reactUtils = require("@peersyst/react-utils");
var _jsxRuntime = require("react/jsx-runtime");
function TabIndicator(_ref) {
  var tabGroupRef = _ref.tabGroupRef,
    className = _ref.className,
    style = _ref.style;
  var _useState = (0, _react.useState)(0),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    tabWidth = _useState2[0],
    setTabWidth = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    tabX = _useState4[0],
    setTabX = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    tabGroupX = _useState6[0],
    setTabGroupX = _useState6[1];
  var _useState7 = (0, _react.useState)(0),
    _useState8 = (0, _slicedToArray2["default"])(_useState7, 2),
    scrollX = _useState8[0],
    setScrollX = _useState8[1];
  var _useContext = (0, _react.useContext)(_TabsContext.TabsContext),
    activeRef = _useContext.activeRef;
  (0, _react.useEffect)(function () {
    var _tabGroupRef$current, _tabGroupRef$current2;
    var _ref2 = (activeRef == null ? void 0 : activeRef.getBoundingClientRect()) || {
        width: 0,
        x: 0
      },
      width = _ref2.width,
      x = _ref2.x;
    setTabWidth(width);
    setTabX(x);
    setTabGroupX((tabGroupRef == null || (_tabGroupRef$current = tabGroupRef.current) == null ? void 0 : _tabGroupRef$current.getBoundingClientRect().x) || 0);
    setScrollX((tabGroupRef == null || (_tabGroupRef$current2 = tabGroupRef.current) == null ? void 0 : _tabGroupRef$current2.scrollLeft) || 0);
  }, [activeRef, tabGroupRef]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabIndicator.TabIndicatorRoot, {
    className: (0, _reactUtils.cx)("TabIndicator", className),
    style: style,
    width: tabWidth,
    position: tabX - tabGroupX + scrollX
  });
}