"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Modal: true
};
Object.defineProperty(exports, "Modal", {
  enumerable: true,
  get: function get() {
    return _Modal["default"];
  }
});
var _Modal = _interopRequireDefault(require("./Modal"));
var _Modal2 = require("./Modal.styles");
Object.keys(_Modal2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Modal2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Modal2[key];
    }
  });
});
var _Modal3 = require("./Modal.types");
Object.keys(_Modal3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Modal3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Modal3[key];
    }
  });
});