import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import { BaseValidator } from "./BaseValidator";
export var NumberValidator = /*#__PURE__*/function (_BaseValidator) {
  _inherits(NumberValidator, _BaseValidator);
  function NumberValidator(message, translate) {
    var _this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, NumberValidator);
    _this = _callSuper(this, NumberValidator, [message != null ? message : translate("invalid_number")]);
    _defineProperty(_assertThisInitialized(_this), "options", {});
    _this.options = options;
    if (!message) {
      if (options.greaterThan !== undefined) {
        _this.message = translate("invalid_number_gt", {
          n: options.greaterThan.toString()
        });
      }
      if (options.greaterEqualThan !== undefined) {
        _this.message = translate("invalid_number_gte", {
          n: options.greaterEqualThan.toString()
        });
      }
      if (options.equalThan !== undefined) {
        _this.message = translate("invalid_number_eq", {
          n: options.equalThan.toString()
        });
      }
      if (options.lowerThan !== undefined) {
        _this.message = translate("invalid_number_lt", {
          n: options.lowerThan.toString()
        });
      }
      if (options.lowerEqualThan !== undefined) {
        _this.message = translate("invalid_number_lte", {
          n: options.lowerEqualThan.toString()
        });
      }
    }
    return _this;
  }
  _createClass(NumberValidator, [{
    key: "validate",
    value: function validate(value) {
      var parsed = Number(value);
      if (isNaN(parsed)) return false;else if (value === "" || value === null || value === undefined) return true;
      var valid = true;
      if (this.options.greaterThan !== undefined) {
        var stepValid = parsed > this.options.greaterThan;
        valid = valid && stepValid;
      }
      if (this.options.greaterEqualThan !== undefined) {
        var _stepValid = parsed >= this.options.greaterEqualThan;
        valid = valid && _stepValid;
      }
      if (this.options.equalThan !== undefined) {
        var _stepValid2 = parsed === this.options.equalThan;
        valid = valid && _stepValid2;
      }
      if (this.options.lowerThan !== undefined) {
        var _stepValid3 = parsed < this.options.lowerThan;
        valid = valid && _stepValid3;
      }
      if (this.options.lowerEqualThan !== undefined) {
        var _stepValid4 = parsed <= this.options.lowerEqualThan;
        valid = valid && _stepValid4;
      }
      return valid;
    }
  }]);
  return NumberValidator;
}(BaseValidator);