"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _react = require("react");
function _default() {
  var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var getItems = arguments.length > 1 ? arguments[1] : undefined;
  return (0, _react.useMemo)(function () {
    var items = [];
    pages.forEach(function (page) {
      return items = items.concat(getItems(page));
    });
    return items;
  }, [pages]);
}