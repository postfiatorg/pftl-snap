"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlErrorRoot = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _FormControlHint = require("../FormControlHint");
var FormControlErrorRoot = exports.FormControlErrorRoot = (0, _styledComponents["default"])(_FormControlHint.FormControlHint).attrs({
  light: false
})(function (_ref) {
  var theme = _ref.theme;
  return {
    color: theme.palette.status.error
  };
});