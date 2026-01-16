"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  SvgIcon: true
};
Object.defineProperty(exports, "SvgIcon", {
  enumerable: true,
  get: function get() {
    return _SvgIcon["default"];
  }
});
var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));
var _SvgIcon2 = require("./SvgIcon.styles");
Object.keys(_SvgIcon2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SvgIcon2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SvgIcon2[key];
    }
  });
});
var _SvgIcon3 = require("./SvgIcon.types");
Object.keys(_SvgIcon3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SvgIcon3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SvgIcon3[key];
    }
  });
});