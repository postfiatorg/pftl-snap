"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isColor", {
  enumerable: true,
  get: function get() {
    return _validateColor.validateHTMLColor;
  }
});
Object.defineProperty(exports, "isHexColor", {
  enumerable: true,
  get: function get() {
    return _validateColor.validateHTMLColorHex;
  }
});
Object.defineProperty(exports, "isHslColor", {
  enumerable: true,
  get: function get() {
    return _validateColor.validateHTMLColorHsl;
  }
});
Object.defineProperty(exports, "isHwbColor", {
  enumerable: true,
  get: function get() {
    return _validateColor.validateHTMLColorHwb;
  }
});
Object.defineProperty(exports, "isLabColor", {
  enumerable: true,
  get: function get() {
    return _validateColor.validateHTMLColorLab;
  }
});
Object.defineProperty(exports, "isNameColor", {
  enumerable: true,
  get: function get() {
    return _validateColor.validateHTMLColorName;
  }
});
Object.defineProperty(exports, "isRgbColor", {
  enumerable: true,
  get: function get() {
    return _validateColor.validateHTMLColorRgb;
  }
});
Object.defineProperty(exports, "isSpecialNameColor", {
  enumerable: true,
  get: function get() {
    return _validateColor.validateHTMLColorSpecialName;
  }
});
var _validateColor = require("validate-color");