"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Typography: true
};
Object.defineProperty(exports, "Typography", {
  enumerable: true,
  get: function get() {
    return _Typography["default"];
  }
});
var _Typography = _interopRequireDefault(require("./Typography"));
var _Typography2 = require("./Typography.styles");
Object.keys(_Typography2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Typography2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Typography2[key];
    }
  });
});
var _Typography3 = require("./Typography.types");
Object.keys(_Typography3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Typography3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Typography3[key];
    }
  });
});