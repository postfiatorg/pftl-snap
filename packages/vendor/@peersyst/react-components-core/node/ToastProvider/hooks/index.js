"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _useToast = require("./useToast");
Object.keys(_useToast).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useToast[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useToast[key];
    }
  });
});
var _useToasterState = require("./useToasterState");
Object.keys(_useToasterState).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _useToasterState[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _useToasterState[key];
    }
  });
});