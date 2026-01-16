"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberValidator = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _BaseValidator2 = require("./BaseValidator");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var NumberValidator = exports.NumberValidator = /*#__PURE__*/function (_BaseValidator) {
  (0, _inherits2["default"])(NumberValidator, _BaseValidator);
  function NumberValidator(message, translate) {
    var _this;
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    (0, _classCallCheck2["default"])(this, NumberValidator);
    _this = _callSuper(this, NumberValidator, [message != null ? message : translate("invalid_number")]);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "options", {});
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
  (0, _createClass2["default"])(NumberValidator, [{
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
}(_BaseValidator2.BaseValidator);