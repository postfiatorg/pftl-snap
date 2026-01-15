import { createContext } from "react";
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
export var ModalContext = /*#__PURE__*/createContext(defaultValue);
export var ModalConsumer = ModalContext.Consumer;