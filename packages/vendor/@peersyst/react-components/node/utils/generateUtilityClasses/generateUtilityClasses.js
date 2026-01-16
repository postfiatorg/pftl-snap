"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateUtilityClasses;
var _generateUtilityClass = require("../generateUtilityClass");
function generateUtilityClasses(componentName, slots) {
  var result = {};
  slots.forEach(function (slot) {
    result[slot] = (0, _generateUtilityClass.generateUtilityClass)(componentName, slot);
  });
  return result;
}