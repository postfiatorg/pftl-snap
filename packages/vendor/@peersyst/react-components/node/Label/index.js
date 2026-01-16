"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Label: true
};
Object.defineProperty(exports, "Label", {
  enumerable: true,
  get: function get() {
    return _Label["default"];
  }
});
var _Label = _interopRequireDefault(require("./Label"));
var _Label2 = require("./Label.types");
Object.keys(_Label2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Label2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Label2[key];
    }
  });
});
var _Label3 = require("./Label.styles");
Object.keys(_Label3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Label3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Label3[key];
    }
  });
});