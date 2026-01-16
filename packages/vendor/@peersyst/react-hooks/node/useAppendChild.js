"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useAppendChild;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useAppendChild(elementId) {
  var _useState = (0, _react.useState)(document.createElement("div")),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 1),
    element = _useState2[0];
  var _useState3 = (0, _react.useState)(document.getElementById(elementId)),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    container = _useState4[0],
    setContainer = _useState4[1];
  (0, _react.useEffect)(function () {
    setContainer(document.getElementById(elementId));
    container == null || container.appendChild(element);
    return function () {
      container == null || container.removeChild(element);
    };
  }, [element, container, elementId]);
  return [element, container];
}