"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useDrawer = useDrawer;
var _ModalProvider = require("../../ModalProvider");
function useDrawer() {
  var _useModal = (0, _ModalProvider.useModal)(),
    showModal = _useModal.showModal,
    hideModal = _useModal.hideModal,
    isModalActive = _useModal.isModalActive;
  return {
    showDrawer: showModal,
    hideDrawer: hideModal,
    isDrawerActive: isModalActive
  };
}