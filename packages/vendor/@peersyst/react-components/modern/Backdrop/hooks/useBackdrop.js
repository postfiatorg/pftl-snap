import { useModal } from "../../ModalProvider";
export function useBackdrop() {
  var _useModal = useModal(),
    showModal = _useModal.showModal,
    hideModal = _useModal.hideModal,
    isModalActive = _useModal.isModalActive;
  return {
    showBackdrop: showModal,
    hideBackdrop: hideModal,
    isBackdropActive: isModalActive
  };
}