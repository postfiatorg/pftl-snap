"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Paper: true
};
Object.defineProperty(exports, "Paper", {
  enumerable: true,
  get: function get() {
    return _Paper["default"];
  }
});
var _Paper = _interopRequireDefault(require("./Paper"));
var _Paper2 = require("./Paper.styles");
Object.keys(_Paper2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Paper2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Paper2[key];
    }
  });
});
var _Paper3 = require("./Paper.types");
Object.keys(_Paper3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Paper3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Paper3[key];
    }
  });
});