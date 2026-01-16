"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = capitalize;
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}