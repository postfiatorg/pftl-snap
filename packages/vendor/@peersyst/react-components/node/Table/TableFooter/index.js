"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TableFooter: true
};
Object.defineProperty(exports, "TableFooter", {
  enumerable: true,
  get: function get() {
    return _TableFooter["default"];
  }
});
var _TableFooter = _interopRequireDefault(require("./TableFooter"));
var _TableFooter2 = require("./TableFooter.types");
Object.keys(_TableFooter2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TableFooter2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableFooter2[key];
    }
  });
});
var _TableFooter3 = require("./TableFooter.styles");
Object.keys(_TableFooter3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TableFooter3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableFooter3[key];
    }
  });
});