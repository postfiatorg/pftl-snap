"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TableNoRowsOverlay: true
};
Object.defineProperty(exports, "TableNoRowsOverlay", {
  enumerable: true,
  get: function get() {
    return _TableNoRowsOverlay["default"];
  }
});
var _TableNoRowsOverlay = _interopRequireDefault(require("./TableNoRowsOverlay"));
var _TableNoRowsOverlay2 = require("./TableNoRowsOverlay.types");
Object.keys(_TableNoRowsOverlay2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TableNoRowsOverlay2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableNoRowsOverlay2[key];
    }
  });
});