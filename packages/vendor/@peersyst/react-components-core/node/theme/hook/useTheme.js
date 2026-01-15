"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _react = require("react");
var _ThemeContext = require("../ThemeContext");
var _ThemeOverrideContext = require("../ThemeOverrideContext");
function _default() {
  var _useContext;
  var overriddenTheme = (_useContext = (0, _react.useContext)(_ThemeOverrideContext.ThemeOverrideContext)) == null ? void 0 : _useContext.theme;
  var theme = (0, _react.useContext)(_ThemeContext.ThemeContext).theme;
  return overriddenTheme || theme;
}