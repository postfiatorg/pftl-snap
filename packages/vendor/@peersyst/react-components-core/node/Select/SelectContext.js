"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectProvider = exports.SelectContext = exports.SelectConsumer = void 0;
var _react = require("react");
var SelectContext = exports.SelectContext = /*#__PURE__*/(0, _react.createContext)({
  value: undefined,
  multiple: false,
  readonly: false,
  setValue: function setValue() {
    return undefined;
  },
  setOpen: function setOpen() {
    return undefined;
  },
  compare: function compare(a, b) {
    return a === b;
  }
});
var SelectProvider = exports.SelectProvider = SelectContext.Provider;
var SelectConsumer = exports.SelectConsumer = SelectContext.Consumer;