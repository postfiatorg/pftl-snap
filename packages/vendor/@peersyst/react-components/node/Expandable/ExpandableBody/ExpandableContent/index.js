"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ExpandableContent: true
};
Object.defineProperty(exports, "ExpandableContent", {
  enumerable: true,
  get: function get() {
    return _ExpandableContent["default"];
  }
});
var _ExpandableContent = _interopRequireDefault(require("./ExpandableContent"));
var _ExpandableContent2 = require("./ExpandableContent.styles");
Object.keys(_ExpandableContent2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ExpandableContent2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ExpandableContent2[key];
    }
  });
});