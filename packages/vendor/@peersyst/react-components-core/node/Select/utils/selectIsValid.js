"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectIsValid = selectIsValid;
function selectIsValid(value, multiple, required) {
  return !required || required && (multiple ? !!(value != null && value.length) : value !== undefined);
}