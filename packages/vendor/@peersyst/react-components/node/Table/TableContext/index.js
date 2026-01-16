"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _TableContext = require("./TableContext");
Object.keys(_TableContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableContext[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableContext[key];
    }
  });
});
var _TableContext2 = require("./TableContext.types");
Object.keys(_TableContext2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TableContext2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableContext2[key];
    }
  });
});