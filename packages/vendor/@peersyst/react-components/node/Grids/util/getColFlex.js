"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
function _default(v) {
  return typeof v === "number" ? v : v[0];
}