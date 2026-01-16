"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useNumericInput;
var _config = require("../../config");
var _utils = require("../utils");
function useNumericInput() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    locale = _ref.locale,
    maxDecimals = _ref.maxDecimals;
  var defaultLocale = (0, _config.useLocale)();
  var finalLocale = locale || defaultLocale;
  return {
    format: function format(value) {
      return (0, _utils.formatNumber)(value, finalLocale, maxDecimals);
    },
    parse: function parse(curr, prev) {
      var parseValue = (0, _utils.parseNumber)(curr, maxDecimals);
      if (parseValue === "NaN") return prev;
      return parseValue;
    }
  };
}