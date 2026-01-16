"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
function _default(gap) {
  if (!gap) return "20px";
  return typeof gap === "number" ? gap.toString() + "px" : gap;
}