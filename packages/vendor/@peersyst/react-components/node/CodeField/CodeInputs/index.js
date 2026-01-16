"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CodeInputs: true
};
Object.defineProperty(exports, "CodeInputs", {
  enumerable: true,
  get: function get() {
    return _CodeInputs["default"];
  }
});
var _CodeInputs = _interopRequireDefault(require("./CodeInputs"));
var _CodeInputs2 = require("./CodeInputs.types");
Object.keys(_CodeInputs2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CodeInputs2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CodeInputs2[key];
    }
  });
});
var _CodeInputs3 = require("./CodeInputs.styles");
Object.keys(_CodeInputs3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _CodeInputs3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _CodeInputs3[key];
    }
  });
});