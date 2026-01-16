"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModal = useModal;
var _ModalContext = require("../ModalContext");
var _react = require("react");
function useModal() {
  var _useContext = (0, _react.useContext)(_ModalContext.ModalContext),
    showModal = _useContext.showModal,
    hideModal = _useContext.hideModal,
    isModalActive = _useContext.isModalActive;
  return {
    showModal: showModal,
    hideModal: hideModal,
    isModalActive: isModalActive
  };
}