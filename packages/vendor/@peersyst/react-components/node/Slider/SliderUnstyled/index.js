"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  SliderUnstyled: true
};
Object.defineProperty(exports, "SliderUnstyled", {
  enumerable: true,
  get: function get() {
    return _SliderUnstyled["default"];
  }
});
var _SliderUnstyled = _interopRequireDefault(require("./SliderUnstyled"));
var _SliderUnstyled2 = require("./SliderUnstyled.types");
Object.keys(_SliderUnstyled2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _SliderUnstyled2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _SliderUnstyled2[key];
    }
  });
});