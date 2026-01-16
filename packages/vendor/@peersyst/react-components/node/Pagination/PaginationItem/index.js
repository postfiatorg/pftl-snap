"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  PaginationItem: true
};
Object.defineProperty(exports, "PaginationItem", {
  enumerable: true,
  get: function get() {
    return _PaginationItem["default"];
  }
});
var _PaginationItem = _interopRequireDefault(require("./PaginationItem"));
var _PaginationItem2 = require("./PaginationItem.styles");
Object.keys(_PaginationItem2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PaginationItem2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PaginationItem2[key];
    }
  });
});
var _PaginationItem3 = require("./PaginationItem.types");
Object.keys(_PaginationItem3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PaginationItem3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PaginationItem3[key];
    }
  });
});