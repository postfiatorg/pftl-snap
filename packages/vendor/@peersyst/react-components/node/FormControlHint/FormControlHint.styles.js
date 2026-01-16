"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormControlHintRoot = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Typography = require("../Typography");
var FormControlHintRoot = exports.FormControlHintRoot = (0, _styledComponents["default"])(_Typography.Typography).attrs({
  variant: "caption"
})(function () {
  return {
    marginLeft: "5px"
  };
});