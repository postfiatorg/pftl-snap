"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSelectValue = renderSelectValue;
function renderSelectValue(value) {
  if (Array.isArray(value)) return value.join(", ");else return value;
}