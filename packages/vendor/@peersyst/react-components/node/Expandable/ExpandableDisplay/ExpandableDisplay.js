"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ExpandableDisplay;
var _react = require("react");
var _ExpandableContext = require("../ExpandableContext");
var _ExpandableDisplay = require("./ExpandableDisplay.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function ExpandableDisplay(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("ExpandableDisplay", props),
    reverse = _useMergeDefaultProps.reverse,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    children = _useMergeDefaultProps.children,
    _useMergeDefaultProps2 = _useMergeDefaultProps.ExpandComponent,
    ExpandComponent = _useMergeDefaultProps2 === void 0 ? _ExpandableDisplay.ExpandableDropdown : _useMergeDefaultProps2;
  var _useContext = (0, _react.useContext)(_ExpandableContext.ExpandableContext),
    toggle = _useContext.toggle,
    open = _useContext.open;
  var styleProps = {
    open: open
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ExpandableDisplay.ExpandableDisplayRoot, {
    className: (0, _reactUtils.cx)(className, "ExpandableDisplay", open && "Open"),
    style: (0, _reactUtils.fsx)(style, styleProps),
    onClick: function onClick() {
      return toggle();
    },
    reverse: !!reverse,
    children: [children, ExpandComponent && /*#__PURE__*/(0, _jsxRuntime.jsx)(ExpandComponent, {
      open: open
    })]
  });
}