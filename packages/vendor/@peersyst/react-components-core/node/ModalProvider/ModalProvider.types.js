"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalActionType = void 0;
var ModalActionType = exports.ModalActionType = /*#__PURE__*/function (ModalActionType) {
  ModalActionType[ModalActionType["SHOW_MODAL"] = 0] = "SHOW_MODAL";
  ModalActionType[ModalActionType["HIDE_MODAL"] = 1] = "HIDE_MODAL";
  ModalActionType[ModalActionType["REMOVE_MODAL"] = 2] = "REMOVE_MODAL";
  ModalActionType[ModalActionType["OVERRIDE_MODAL"] = 3] = "OVERRIDE_MODAL";
  return ModalActionType;
}({});