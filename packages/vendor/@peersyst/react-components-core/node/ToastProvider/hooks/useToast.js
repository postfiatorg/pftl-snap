"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useToast = useToast;
var _react = require("react");
var _ToastContext = require("../ToastContext");
function useToast() {
  var _useContext = (0, _react.useContext)(_ToastContext.ToastContext),
    showToast = _useContext.showToast,
    hideToast = _useContext.hideToast,
    toasts = _useContext.toasts;
  return {
    showToast: showToast,
    hideToast: hideToast,
    toastActive: toasts.length > 0
  };
}