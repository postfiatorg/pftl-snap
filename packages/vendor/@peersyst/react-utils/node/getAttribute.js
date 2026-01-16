"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));
// @ts-ignore Not excessively deep (max 10 levels)
function _default(obj, key
// @ts-ignore Not excessively deep (max 10 levels)
) {
  var _key$split = key.split("."),
    _key$split2 = (0, _toArray2["default"])(_key$split),
    firstKey = _key$split2[0],
    restKeys = _key$split2.slice(1);

  // @ts-ignore+
  return restKeys.reduce(function (prev, curr) {
    return prev[curr];
  }, obj[firstKey]);
}