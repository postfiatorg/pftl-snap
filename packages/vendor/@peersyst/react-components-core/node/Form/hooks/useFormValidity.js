"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _react = require("react");
var _FormContext = require("../FormContext");
function _default() {
  var _useContext = (0, _react.useContext)(_FormContext.FormContext),
    valid = _useContext.valid;
  return valid;
}