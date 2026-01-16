"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SelectItem;
var _SelectItem = require("./SelectItem.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function SelectItem(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("SelectItem", props),
    _children = _useMergeDefaultProps.children,
    value = _useMergeDefaultProps.value,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactComponentsCore.SelectItem, {
    value: value,
    children: function children(_ref) {
      var isSelected = _ref.isSelected,
        setSelected = _ref.setSelected,
        readonly = _ref.readonly;
      var styleProps = {
        selected: isSelected
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectItem.SelectItemRoot, {
        onClick: setSelected,
        selected: isSelected,
        readonly: readonly,
        className: (0, _reactUtils.cx)(className, "SelectItem", isSelected && "Selected"),
        style: (0, _reactUtils.fsx)(style, styleProps),
        children: _children
      });
    }
  });
}