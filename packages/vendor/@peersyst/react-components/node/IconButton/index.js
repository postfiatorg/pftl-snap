"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  IconButton: true
};
Object.defineProperty(exports, "IconButton", {
  enumerable: true,
  get: function get() {
    return _IconButton["default"];
  }
});
var _IconButton = _interopRequireDefault(require("./IconButton"));
var _IconButton2 = require("./IconButton.styles");
Object.keys(_IconButton2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IconButton2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IconButton2[key];
    }
  });
});
var _IconButton3 = require("./IconButton.types");
Object.keys(_IconButton3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _IconButton3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _IconButton3[key];
    }
  });
});