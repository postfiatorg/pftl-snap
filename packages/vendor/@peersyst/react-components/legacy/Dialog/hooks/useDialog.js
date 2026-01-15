import { useDialog } from "@peersyst/react-components-core";
import Dialog from "../Dialog";
export default function () {
  var _useDialog = useDialog(),
    _showDialog = _useDialog.showDialog,
    _hideDialog = _useDialog.hideDialog,
    _isDialogOpen = _useDialog.isDialogOpen;
  return {
    showDialog: function showDialog(props) {
      return _showDialog(Dialog, props);
    },
    hideDialog: function hideDialog() {
      return _hideDialog(Dialog.id);
    },
    isDialogOpen: function isDialogOpen() {
      return _isDialogOpen(Dialog.id);
    }
  };
}