"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Pagination: true
};
Object.defineProperty(exports, "Pagination", {
  enumerable: true,
  get: function get() {
    return _Pagination["default"];
  }
});
var _PaginationItem = require("./PaginationItem");
Object.keys(_PaginationItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PaginationItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PaginationItem[key];
    }
  });
});
var _Pagination = _interopRequireDefault(require("./Pagination"));
var _Pagination2 = require("./Pagination.styles");
Object.keys(_Pagination2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Pagination2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Pagination2[key];
    }
  });
});
var _Pagination3 = require("./Pagination.types");
Object.keys(_Pagination3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Pagination3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Pagination3[key];
    }
  });
});