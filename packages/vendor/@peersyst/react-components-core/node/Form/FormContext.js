"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormProvider = exports.FormContext = exports.FormConsumer = void 0;
var _react = require("react");
var FormContext = exports.FormContext = /*#__PURE__*/(0, _react.createContext)({
  valid: true,
  notifyForm: function notifyForm() {
    return undefined;
  },
  submitted: false,
  handleSubmit: function handleSubmit() {
    return undefined;
  }
});
var FormProvider = exports.FormProvider = FormContext.Provider;
var FormConsumer = exports.FormConsumer = FormContext.Consumer;