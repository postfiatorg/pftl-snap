"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itemIsSelected = itemIsSelected;
function itemIsSelected(value, selected, multiple) {
  var compare = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (a, b) {
    return a === b;
  };
  if (selected === undefined) return false;
  if (multiple) return !!selected.find(function (v) {
    return compare(v, value);
  });else return compare(selected, value);
}