"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Switch: true
};
Object.defineProperty(exports, "Switch", {
  enumerable: true,
  get: function get() {
    return _Switch["default"];
  }
});
var _Switch = _interopRequireDefault(require("./Switch"));
var _Switch2 = require("./Switch.styles");
Object.keys(_Switch2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Switch2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Switch2[key];
    }
  });
});
var _Switch3 = require("./Switch.types");
Object.keys(_Switch3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Switch3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Switch3[key];
    }
  });
});