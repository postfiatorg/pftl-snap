"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _react = require("react");
function _default(children) {
  var slots = {};
  _react.Children.forEach(children, function (child) {
    if ( /*#__PURE__*/(0, _react.isValidElement)(child)) {
      var elementChild = child;
      var childType = elementChild.type;
      if (typeof childType === "function" && "name" in childType) {
        slots[childType.name] = elementChild;
      }
    }
  });
  return slots;
}