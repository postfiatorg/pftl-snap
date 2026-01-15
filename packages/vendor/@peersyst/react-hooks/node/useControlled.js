"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useControlled;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useControlled(defaultValue, value, onChange) {
  var _useState = (0, _react.useState)(defaultValue),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var handleChange = function handleChange(v) {
    if (value === undefined) setState(v);
    onChange == null || onChange(v);
  };
  return [value != null ? value : state, handleChange];
}