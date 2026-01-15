"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
exports.parseValidator = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _NumberValidator = require("./NumberValidator");
var _EmailValidator = require("./EmailValidator");
var _PasswordValidator = require("./PasswordValidator");
var _EqualValidator = require("./EqualValidator");
var _MinCharsValidator = require("./MinCharsValidator");
var _MaxCharsValidator = require("./MaxCharsValidator");
var _StartsWithValidator = require("./StartsWithValidator");
var _EndsWithValidator = require("./EndsWithValidator");
var _ColorValidator = require("./ColorValidator");
var _UrlValidator = require("./UrlValidator");
var _NotEqualValidator = require("./NotEqualValidator");
var parseValidator = exports.parseValidator = function parseValidator(validator, param, extraValidators, translate) {
  var _ref = Array.isArray(param) ? param : [param, undefined],
    _ref2 = (0, _slicedToArray2["default"])(_ref, 2),
    value = _ref2[0],
    message = _ref2[1];
  switch (validator) {
    case "number":
      return new _NumberValidator.NumberValidator(message, translate);
    case "email":
      return new _EmailValidator.EmailValidator(message, translate);
    case "password":
      return new _PasswordValidator.PasswordValidator(message, translate);
    case "eq":
      return new _EqualValidator.EqualValidator(message, translate, value);
    case "notEq":
      return new _NotEqualValidator.NotEqualValidator(message, translate, value);
    case "gt":
      return new _NumberValidator.NumberValidator(message, translate, {
        greaterThan: value
      });
    case "gte":
      return new _NumberValidator.NumberValidator(message, translate, {
        greaterEqualThan: value
      });
    case "lt":
      return new _NumberValidator.NumberValidator(message, translate, {
        lowerThan: value
      });
    case "lte":
      return new _NumberValidator.NumberValidator(message, translate, {
        lowerEqualThan: value
      });
    case "minChars":
      return new _MinCharsValidator.MinCharsValidator(value, message, translate);
    case "maxChars":
      return new _MaxCharsValidator.MaxCharsValidator(value, message, translate);
    case "startsWith":
      return new _StartsWithValidator.StartsWithValidator(value, message, translate);
    case "endsWith":
      return new _EndsWithValidator.EndsWithValidator(value, message, translate);
    case "color":
      return new _ColorValidator.ColorValidator(value, message, translate);
    case "url":
      return new _UrlValidator.UrlValidator(message, translate);
    default:
      return new extraValidators[validator](message, translate, value);
  }
};
function _default(validators, extraValidators, translate) {
  return Object.entries(validators).map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2["default"])(_ref3, 2),
      key = _ref4[0],
      param = _ref4[1];
    return parseValidator(key, param, extraValidators, translate);
  });
}