"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = findSlot;
var _react = require("react");
/**
 * Deprecated
 * @param children
 * @param type
 */
function findSlot(children, type) {
  return _react.Children.toArray(children).find(function (child) {
    return child.type === type;
  });
}