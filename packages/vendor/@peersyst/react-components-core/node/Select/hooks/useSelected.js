"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSelected = useSelected;
var _react = require("react");
var _utils = require("../utils");
function useSelected(value, selected, multiple, compare) {
  return (0, _react.useMemo)(function () {
    return (0, _utils.itemIsSelected)(value, selected, multiple, compare);
  }, [value, selected, multiple]);
}