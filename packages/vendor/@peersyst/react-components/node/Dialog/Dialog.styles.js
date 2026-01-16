"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DialogTitle = exports.DialogRoot = exports.DialogBody = exports.DialogActions = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Modal = require("../Modal");
var _Dialog = require("./Dialog.constants");
var DialogRoot = exports.DialogRoot = (0, _styledComponents["default"])(_Modal.Modal)(function (_ref) {
  var size = _ref.size;
  return {
    padding: 0,
    maxWidth: _Dialog.DIALOG_SIZES_MAP[size] || size,
    width: "100%",
    height: "auto",
    margin: "32px"
  };
});
var DialogTitle = exports.DialogTitle = _styledComponents["default"].h2(function (_ref2) {
  var theme = _ref2.theme;
  return {
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: theme.palette.text,
    padding: "1rem",
    flex: "0 0 auto"
  };
});
var DialogBody = exports.DialogBody = _styledComponents["default"].div({
  padding: "0 1rem",
  flex: "1 1 auto",
  overflowY: "auto",
  fontSize: "1rem"
});
var DialogActions = exports.DialogActions = _styledComponents["default"].div({
  padding: "1rem",
  flex: "0 0 auto"
});