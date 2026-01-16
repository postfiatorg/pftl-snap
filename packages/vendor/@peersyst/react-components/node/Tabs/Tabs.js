"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Tabs;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _Col = require("../Col");
var _TabsContext = require("./TabsContext");
var _reactUtils = require("@peersyst/react-utils");
var _reactHooks = require("@peersyst/react-hooks");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function Tabs(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Tabs", props),
    index = _useMergeDefaultProps.index,
    onIndexChange = _useMergeDefaultProps.onIndexChange,
    _useMergeDefaultProps2 = _useMergeDefaultProps.initialIndex,
    initialIndex = _useMergeDefaultProps2 === void 0 ? 0 : _useMergeDefaultProps2,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children;
  var _useControlled = (0, _reactHooks.useControlled)(initialIndex, index, onIndexChange),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    activeIndex = _useControlled2[0],
    setActiveIndex = _useControlled2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    activeRef = _useState2[0],
    setActiveRef = _useState2[1];
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col.Col, {
    className: (0, _reactUtils.cx)("Tabs", className),
    style: style,
    gap: 20,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsContext.TabsProvider, {
      value: {
        activeIndex: activeIndex,
        onTabChange: setActiveIndex,
        activeRef: activeRef,
        setActiveRef: setActiveRef
      },
      children: children
    })
  });
}