"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Table: true
};
Object.defineProperty(exports, "Table", {
  enumerable: true,
  get: function get() {
    return _Table["default"];
  }
});
var _Table = _interopRequireDefault(require("./Table"));
var _Table2 = require("./Table.types");
Object.keys(_Table2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Table2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Table2[key];
    }
  });
});
var _PaginatedTable = require("./PaginatedTable");
Object.keys(_PaginatedTable).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _PaginatedTable[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PaginatedTable[key];
    }
  });
});
require("./Table.extensions");