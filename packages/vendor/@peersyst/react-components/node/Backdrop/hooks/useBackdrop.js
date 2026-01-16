"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useBackdrop = useBackdrop;
var _ModalProvider = require("../../ModalProvider");
function useBackdrop() {
  var _useModal = (0, _ModalProvider.useModal)(),
    showModal = _useModal.showModal,
    hideModal = _useModal.hideModal,
    isModalActive = _useModal.isModalActive;
  return {
    showBackdrop: showModal,
    hideBackdrop: hideModal,
    isBackdropActive: isModalActive
  };
}