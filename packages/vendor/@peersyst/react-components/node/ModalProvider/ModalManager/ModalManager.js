"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalManager = ModalManager;
var _ModalManager = require("./ModalManager.styles");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
function ModalManager() {
  var modals = (0, _reactComponentsCore.useModalState)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalManager.ModalManagerRoot, {
    id: "modal-root",
    children: modals
  });
}