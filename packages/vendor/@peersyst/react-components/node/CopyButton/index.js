"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CopyButton: true
};
Object.defineProperty(exports, "CopyButton", {
  enumerable: true,
  get: function get() {
    return _CopyButton["default"];
  }
});
var _CopyButton = _interopRequireDefault(require("./CopyButton"));
var _CopyButton2 = require("./CopyButton.types");
Object.keys(_CopyButton2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CopyButton2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CopyButton2[key];
    }
  });
});