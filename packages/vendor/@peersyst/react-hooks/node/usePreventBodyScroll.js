"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = usePreventBodyScroll;
var _react = require("react");
function usePreventBodyScroll(prevent) {
  (0, _react.useEffect)(function () {
    if (prevent) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.removeProperty("overflow");
    }
    return function () {
      if (prevent) {
        document.documentElement.style.removeProperty("overflow");
      }
    };
  }, [prevent]);
}