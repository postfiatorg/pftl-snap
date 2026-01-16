"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Button: true
};
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function get() {
    return _Button["default"];
  }
});
var _Button = _interopRequireDefault(require("./Button"));
var _Button2 = require("./Button.styles");
Object.keys(_Button2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button2[key];
    }
  });
});
var _Button3 = require("./Button.types");
Object.keys(_Button3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Button3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Button3[key];
    }
  });
});