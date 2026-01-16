"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTranslateValue = setTranslateValue;
var _getTranslateValue = require("./getTranslateValue");
function setTranslateValue(direction, node, containerProp) {
  var transform = (0, _getTranslateValue.getTranslateValue)(direction, node, containerProp);
  if (transform) node.style.transform = transform;
}