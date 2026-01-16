import { useModal } from "../../ModalProvider";
export function useDrawer() {
  var _useModal = useModal(),
    showModal = _useModal.showModal,
    hideModal = _useModal.hideModal,
    isModalActive = _useModal.isModalActive;
  return {
    showDrawer: showModal,
    hideDrawer: hideModal,
    isDrawerActive: isModalActive
  };
}