import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import { BaseValidator } from "./BaseValidator";
import validator from "validator";
export var EmailValidator = /*#__PURE__*/function (_BaseValidator) {
  _inherits(EmailValidator, _BaseValidator);
  function EmailValidator(message, translate) {
    _classCallCheck(this, EmailValidator);
    return _callSuper(this, EmailValidator, [message != null ? message : translate("invalid_email")]);
  }
  _createClass(EmailValidator, [{
    key: "validate",
    value: function validate(value) {
      if (!value) return true;
      return validator.isEmail(value);
    }
  }]);
  return EmailValidator;
}(BaseValidator);