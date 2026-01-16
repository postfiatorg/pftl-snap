"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactHooks = require("@peersyst/react-hooks");
function _default(defaultValue, value, onChange) {
  var _useControlled = (0, _reactHooks.useControlled)(defaultValue, value, onChange),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    state = _useControlled2[0],
    setState = _useControlled2[1];
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    modified = _useState2[0],
    setModified = _useState2[1];
  (0, _react.useEffect)(function () {
    if (state && !modified) setModified(true);
  }, [modified, state]);
  return {
    state: [state, setState],
    modified: modified
  };
}