"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  withColor: true
};
Object.defineProperty(exports, "withColor", {
  enumerable: true,
  get: function get() {
    return _withColor2["default"];
  }
});
var _withColor = require("./withColor.types");
Object.keys(_withColor).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _withColor[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withColor[key];
    }
  });
});
var _withColor2 = _interopRequireDefault(require("./withColor"));