"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useModal = require("./useModal");
Object.keys(_useModal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useModal[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useModal[key];
    }
  });
});
var _useModalState = require("./useModalState");
Object.keys(_useModalState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useModalState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useModalState[key];
    }
  });
});