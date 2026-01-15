"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabPanel;
var _TabsContext = require("../TabsContext");
var _TabPanel = require("./TabPanel.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function TabPanel(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("TabPanel", props),
    index = _useMergeDefaultProps.index,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _children = _useMergeDefaultProps.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabsContext.TabsConsumer, {
    children: function children(_ref) {
      var activeIndex = _ref.activeIndex;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
        children: activeIndex === index && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabPanel.TabPanelRoot, {
          className: (0, _reactUtils.cx)("TabPanel", className),
          style: style || {},
          children: _children
        })
      });
    }
  });
}