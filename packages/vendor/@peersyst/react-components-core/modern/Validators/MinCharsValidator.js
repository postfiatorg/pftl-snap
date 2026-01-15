import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import { BaseValidator } from "./BaseValidator";
export var MinCharsValidator = /*#__PURE__*/function (_BaseValidator) {
  _inherits(MinCharsValidator, _BaseValidator);
  function MinCharsValidator(chars, message, translate) {
    var _this;
    _classCallCheck(this, MinCharsValidator);
    _this = _callSuper(this, MinCharsValidator, [message != null ? message : translate("insufficient_chars", {
      chars: chars.toString()
    })]);
    _this.chars = chars;
    return _this;
  }
  _createClass(MinCharsValidator, [{
    key: "validate",
    value: function validate(value) {
      if (!value) return true;
      return value.length >= this.chars;
    }
  }]);
  return MinCharsValidator;
}(BaseValidator);