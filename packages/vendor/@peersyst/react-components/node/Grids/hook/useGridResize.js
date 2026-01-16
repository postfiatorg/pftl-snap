"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _react = require("react");
function _default(setPatterns, sortedBreakpoints, gridState) {
  (0, _react.useEffect)(function () {
    var cb = function cb() {
      return setPatterns();
    };
    window.addEventListener("resize", cb);
    return function () {
      window.removeEventListener("resize", cb);
    };
  }, [gridState]);
  (0, _react.useEffect)(function () {
    setPatterns(true);
  }, [sortedBreakpoints]);
}