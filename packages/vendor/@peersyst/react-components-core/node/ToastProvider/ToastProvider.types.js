"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToasterActionType = void 0;
var ToasterActionType = exports.ToasterActionType = /*#__PURE__*/function (ToasterActionType) {
  ToasterActionType[ToasterActionType["SHOW_TOAST"] = 0] = "SHOW_TOAST";
  ToasterActionType[ToasterActionType["HIDE_TOAST"] = 1] = "HIDE_TOAST";
  ToasterActionType[ToasterActionType["REMOVE_TOAST"] = 2] = "REMOVE_TOAST";
  return ToasterActionType;
}({});