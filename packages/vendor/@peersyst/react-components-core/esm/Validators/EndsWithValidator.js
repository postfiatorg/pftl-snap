import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import { BaseValidator } from "./BaseValidator";
export var EndsWithValidator = /*#__PURE__*/function (_BaseValidator) {
  _inherits(EndsWithValidator, _BaseValidator);
  function EndsWithValidator(end, message, translate) {
    var _this;
    _classCallCheck(this, EndsWithValidator);
    _this = _callSuper(this, EndsWithValidator, [message != null ? message : translate("invalid_end", {
      end: end
    })]);
    _this.end = end;
    return _this;
  }
  _createClass(EndsWithValidator, [{
    key: "validate",
    value: function validate(value) {
      if (!value) return true;
      return value.endsWith(this.end);
    }
  }]);
  return EndsWithValidator;
}(BaseValidator);