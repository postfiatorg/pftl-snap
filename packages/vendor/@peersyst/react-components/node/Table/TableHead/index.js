"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TableHead: true
};
Object.defineProperty(exports, "TableHead", {
  enumerable: true,
  get: function get() {
    return _TableHead["default"];
  }
});
var _TableHead = _interopRequireDefault(require("./TableHead"));
var _TableHead2 = require("./TableHead.styles");
Object.keys(_TableHead2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TableHead2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TableHead2[key];
    }
  });
});