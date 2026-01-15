"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastContext = exports.ToastConsumer = void 0;
var _react = require("react");
var ToastContext = exports.ToastContext = /*#__PURE__*/(0, _react.createContext)({
  showToast: function showToast() {
    return undefined;
  },
  hideToast: function hideToast() {
    return undefined;
  },
  removeToast: function removeToast() {
    return undefined;
  },
  toasts: []
});
var ToastConsumer = exports.ToastConsumer = ToastContext.Consumer;