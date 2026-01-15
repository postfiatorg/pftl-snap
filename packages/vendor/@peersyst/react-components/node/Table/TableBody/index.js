"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TableBody: true
};
Object.defineProperty(exports, "TableBody", {
  enumerable: true,
  get: function get() {
    return _TableBody["default"];
  }
});
var _TableBody = _interopRequireDefault(require("./TableBody"));
var _TableBody2 = require("./TableBody.styles");
Object.keys(_TableBody2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TableBody2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableBody2[key];
    }
  });
});