"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _reactComponentsCore = require("@peersyst/react-components-core");
var _Dialog = _interopRequireDefault(require("../Dialog"));
function _default() {
  var _useDialog = (0, _reactComponentsCore.useDialog)(),
    _showDialog = _useDialog.showDialog,
    _hideDialog = _useDialog.hideDialog,
    _isDialogOpen = _useDialog.isDialogOpen;
  return {
    showDialog: function showDialog(props) {
      return _showDialog(_Dialog["default"], props);
    },
    hideDialog: function hideDialog() {
      return _hideDialog(_Dialog["default"].id);
    },
    isDialogOpen: function isDialogOpen() {
      return _isDialogOpen(_Dialog["default"].id);
    }
  };
}