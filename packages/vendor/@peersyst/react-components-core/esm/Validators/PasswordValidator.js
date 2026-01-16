import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import { BaseValidator } from "./BaseValidator";
export var PasswordValidator = /*#__PURE__*/function (_BaseValidator) {
  _inherits(PasswordValidator, _BaseValidator);
  function PasswordValidator(message, translate) {
    _classCallCheck(this, PasswordValidator);
    return _callSuper(this, PasswordValidator, [message != null ? message : translate("invalid_password")]);
  }
  _createClass(PasswordValidator, [{
    key: "validate",
    value: function validate(value) {
      if (!value) return true;
      var regex = /(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W_]).*/g;
      return regex.test(value);
    }
  }]);
  return PasswordValidator;
}(BaseValidator);