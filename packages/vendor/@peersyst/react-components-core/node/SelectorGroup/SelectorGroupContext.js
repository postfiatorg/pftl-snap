"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectorGroupProvider = exports.SelectorGroupContext = exports.SelectorGroupConsumer = void 0;
var _react = require("react");
var SelectorGroupContext = exports.SelectorGroupContext = /*#__PURE__*/(0, _react.createContext)({
  value: undefined,
  multiple: false,
  readonly: false,
  disabled: false,
  setValue: function setValue() {
    return undefined;
  }
});
var SelectorGroupProvider = exports.SelectorGroupProvider = SelectorGroupContext.Provider;
var SelectorGroupConsumer = exports.SelectorGroupConsumer = SelectorGroupContext.Consumer;