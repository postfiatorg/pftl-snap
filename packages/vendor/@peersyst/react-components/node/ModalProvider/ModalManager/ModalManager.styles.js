"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalManagerRoot = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var ModalManagerRoot = exports.ModalManagerRoot = _styledComponents["default"].div(function (_ref) {
  var theme = _ref.theme;
  return {
    position: "fixed",
    zIndex: theme.zIndex.modal + 1
  };
});