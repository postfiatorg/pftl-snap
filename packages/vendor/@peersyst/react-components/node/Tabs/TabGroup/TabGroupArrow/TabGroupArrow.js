"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TabGroupArrow;
var _IconButton = require("../../../IconButton");
var _jsxRuntime = require("react/jsx-runtime");
function TabGroupArrow(_ref) {
  var direction = _ref.direction,
    onScroll = _ref.onScroll,
    tabGroupWidth = _ref.tabGroupWidth,
    tabGroupScrollLeft = _ref.tabGroupScrollLeft,
    tabGroupScrollWidth = _ref.tabGroupScrollWidth,
    children = _ref.children;
  var disabled = direction === "left" ? tabGroupScrollLeft <= 0 : tabGroupScrollLeft + tabGroupWidth >= tabGroupScrollWidth;
  return tabGroupWidth < tabGroupScrollWidth ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_IconButton.IconButton, {
    onClick: function onClick() {
      return !disabled && onScroll(direction);
    },
    disabled: disabled,
    children: children
  }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {});
}