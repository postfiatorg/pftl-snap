"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _Dialog = require("./Dialog.types");
Object.keys(_Dialog).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Dialog[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Dialog[key];
    }
  });
});
var _hooks = require("./hooks");
Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _hooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hooks[key];
    }
  });
});
var _Dialog2 = require("./Dialog.constants");
Object.keys(_Dialog2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _Dialog2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Dialog2[key];
    }
  });
});