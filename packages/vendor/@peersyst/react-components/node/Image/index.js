"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Image: true,
  useImageSrc: true
};
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function get() {
    return _Image["default"];
  }
});
Object.defineProperty(exports, "useImageSrc", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useImageSrc;
  }
});
var _Image = _interopRequireDefault(require("./Image"));
var _Image2 = require("./Image.styles");
Object.keys(_Image2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Image2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Image2[key];
    }
  });
});
var _Image3 = require("./Image.types");
Object.keys(_Image3).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _Image3[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Image3[key];
    }
  });
});
var _reactComponentsCore = require("@peersyst/react-components-core");