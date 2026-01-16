"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useForkRef;
var _reactUtils = require("@peersyst/react-utils");
var _react = require("react");
function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return (0, _react.useMemo)(function () {
    if (refA == null && refB == null) {
      return null;
    }
    return function (refValue) {
      (0, _reactUtils.setRef)(refA, refValue);
      (0, _reactUtils.setRef)(refB, refValue);
    };
  }, [refA, refB]);
}