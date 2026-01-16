"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalContext = exports.ModalConsumer = void 0;
var _react = require("react");
var defaultValue = {
  showModal: function showModal() {
    return undefined;
  },
  hideModal: function hideModal() {
    return undefined;
  },
  removeModal: function removeModal() {
    return undefined;
  },
  overrideModal: function overrideModal() {
    return undefined;
  },
  isModalActive: function isModalActive() {
    return false;
  },
  modals: []
};
var ModalContext = exports.ModalContext = /*#__PURE__*/(0, _react.createContext)(defaultValue);
var ModalConsumer = exports.ModalConsumer = ModalContext.Consumer;