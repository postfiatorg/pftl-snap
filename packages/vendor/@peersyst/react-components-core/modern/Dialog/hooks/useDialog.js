import { useModal } from "../../ModalProvider";
export default function () {
  var _useModal = useModal(),
    showModal = _useModal.showModal,
    hideModal = _useModal.hideModal,
    isModalActive = _useModal.isModalActive;
  var showDialog = function showDialog(Dialog, props) {
    return showModal(Dialog, props);
  };
  var hideDialog = function hideDialog(Dialog) {
    return hideModal(Dialog);
  };
  var isDialogOpen = function isDialogOpen(Dialog) {
    return isModalActive(Dialog);
  };
  return {
    showDialog: showDialog,
    hideDialog: hideDialog,
    isDialogOpen: isDialogOpen
  };
}