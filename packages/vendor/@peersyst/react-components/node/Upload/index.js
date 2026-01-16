"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Upload: true
};
Object.defineProperty(exports, "Upload", {
  enumerable: true,
  get: function get() {
    return _Upload["default"];
  }
});
var _Upload = _interopRequireDefault(require("./Upload"));
var _Upload2 = require("./Upload.styles");
Object.keys(_Upload2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Upload2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Upload2[key];
    }
  });
});
var _Upload3 = require("./Upload.types");
Object.keys(_Upload3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Upload3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Upload3[key];
    }
  });
});