"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ExpandableFooter: true
};
Object.defineProperty(exports, "ExpandableFooter", {
  enumerable: true,
  get: function get() {
    return _ExpandableFooter["default"];
  }
});
var _ExpandableFooter = _interopRequireDefault(require("./ExpandableFooter"));
var _ExpandableFooter2 = require("./ExpandableFooter.styles");
Object.keys(_ExpandableFooter2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ExpandableFooter2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ExpandableFooter2[key];
    }
  });
});