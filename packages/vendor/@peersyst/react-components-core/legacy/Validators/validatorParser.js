import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { NumberValidator } from "./NumberValidator";
import { EmailValidator } from "./EmailValidator";
import { PasswordValidator } from "./PasswordValidator";
import { EqualValidator } from "./EqualValidator";
import { MinCharsValidator } from "./MinCharsValidator";
import { MaxCharsValidator } from "./MaxCharsValidator";
import { StartsWithValidator } from "./StartsWithValidator";
import { EndsWithValidator } from "./EndsWithValidator";
import { ColorValidator } from "./ColorValidator";
import { UrlValidator } from "./UrlValidator";
import { NotEqualValidator } from "./NotEqualValidator";
export var parseValidator = function parseValidator(validator, param, extraValidators, translate) {
  var _ref = Array.isArray(param) ? param : [param, undefined],
    _ref2 = _slicedToArray(_ref, 2),
    value = _ref2[0],
    message = _ref2[1];
  switch (validator) {
    case "number":
      return new NumberValidator(message, translate);
    case "email":
      return new EmailValidator(message, translate);
    case "password":
      return new PasswordValidator(message, translate);
    case "eq":
      return new EqualValidator(message, translate, value);
    case "notEq":
      return new NotEqualValidator(message, translate, value);
    case "gt":
      return new NumberValidator(message, translate, {
        greaterThan: value
      });
    case "gte":
      return new NumberValidator(message, translate, {
        greaterEqualThan: value
      });
    case "lt":
      return new NumberValidator(message, translate, {
        lowerThan: value
      });
    case "lte":
      return new NumberValidator(message, translate, {
        lowerEqualThan: value
      });
    case "minChars":
      return new MinCharsValidator(value, message, translate);
    case "maxChars":
      return new MaxCharsValidator(value, message, translate);
    case "startsWith":
      return new StartsWithValidator(value, message, translate);
    case "endsWith":
      return new EndsWithValidator(value, message, translate);
    case "color":
      return new ColorValidator(value, message, translate);
    case "url":
      return new UrlValidator(message, translate);
    default:
      return new extraValidators[validator](message, translate, value);
  }
};
export default function (validators, extraValidators, translate) {
  return Object.entries(validators).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      key = _ref4[0],
      param = _ref4[1];
    return parseValidator(key, param, extraValidators, translate);
  });
}