"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Scale: true
};
Object.defineProperty(exports, "Scale", {
  enumerable: true,
  get: function get() {
    return _Scale["default"];
  }
});
var _Scale = _interopRequireDefault(require("./Scale"));
var _Scale2 = require("./Scale.types");
Object.keys(_Scale2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Scale2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Scale2[key];
    }
  });
});