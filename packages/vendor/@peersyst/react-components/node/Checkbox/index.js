"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Checkbox: true
};
Object.defineProperty(exports, "Checkbox", {
  enumerable: true,
  get: function get() {
    return _Checkbox["default"];
  }
});
var _Checkbox = _interopRequireDefault(require("./Checkbox"));
var _Checkbox2 = require("./Checkbox.styles");
Object.keys(_Checkbox2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Checkbox2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Checkbox2[key];
    }
  });
});
var _Checkbox3 = require("./Checkbox.types");
Object.keys(_Checkbox3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Checkbox3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Checkbox3[key];
    }
  });
});