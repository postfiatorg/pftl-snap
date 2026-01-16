"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _default = exports["default"] = /*#__PURE__*/(0, _react.createContext)({
  required: false,
  invalid: false,
  valid: false,
  disabled: false,
  readonly: false,
  focused: false,
  setFocused: function setFocused() {
    return undefined;
  }
});