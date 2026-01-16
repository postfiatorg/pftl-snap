"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeRegExp = escapeRegExp;
exports.escapeReplaceAll = escapeReplaceAll;
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}
function escapeReplaceAll(value, find, replace) {
  return value.replace(new RegExp(escapeRegExp(find), "g"), replace);
}