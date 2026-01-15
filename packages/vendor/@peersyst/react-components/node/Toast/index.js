"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Toast: true
};
Object.defineProperty(exports, "Toast", {
  enumerable: true,
  get: function get() {
    return _Toast["default"];
  }
});
var _Toast = _interopRequireDefault(require("./Toast"));
var _Toast2 = require("./Toast.styles");
Object.keys(_Toast2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Toast2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Toast2[key];
    }
  });
});
var _Toast3 = require("./Toast.types");
Object.keys(_Toast3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Toast3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Toast3[key];
    }
  });
});