"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = nullifyEvent;
function nullifyEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}