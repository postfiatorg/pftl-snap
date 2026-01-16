"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _react = require("react");
var _ThemeContext = require("../ThemeContext");
function _default() {
  return (0, _react.useContext)(_ThemeContext.ThemeContext).setTheme;
}