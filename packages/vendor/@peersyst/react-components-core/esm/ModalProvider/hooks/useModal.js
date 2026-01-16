import { ModalContext } from "../ModalContext";
import { useContext } from "react";
export function useModal() {
  var _useContext = useContext(ModalContext),
    showModal = _useContext.showModal,
    hideModal = _useContext.hideModal,
    isModalActive = _useContext.isModalActive;
  return {
    showModal: showModal,
    hideModal: hideModal,
    isModalActive: isModalActive
  };
}