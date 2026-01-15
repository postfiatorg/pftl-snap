"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  TextArea: true
};
Object.defineProperty(exports, "TextArea", {
  enumerable: true,
  get: function get() {
    return _TextArea["default"];
  }
});
var _TextArea = _interopRequireDefault(require("./TextArea"));
var _TextArea2 = require("./TextArea.styles");
Object.keys(_TextArea2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TextArea2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextArea2[key];
    }
  });
});
var _TextArea3 = require("./TextArea.types");
Object.keys(_TextArea3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _TextArea3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TextArea3[key];
    }
  });
});