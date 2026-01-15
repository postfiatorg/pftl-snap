"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EndsWithValidator = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _BaseValidator2 = require("./BaseValidator");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var EndsWithValidator = exports.EndsWithValidator = /*#__PURE__*/function (_BaseValidator) {
  (0, _inherits2["default"])(EndsWithValidator, _BaseValidator);
  function EndsWithValidator(end, message, translate) {
    var _this;
    (0, _classCallCheck2["default"])(this, EndsWithValidator);
    _this = _callSuper(this, EndsWithValidator, [message != null ? message : translate("invalid_end", {
      end: end
    })]);
    _this.end = end;
    return _this;
  }
  (0, _createClass2["default"])(EndsWithValidator, [{
    key: "validate",
    value: function validate(value) {
      if (!value) return true;
      return value.endsWith(this.end);
    }
  }]);
  return EndsWithValidator;
}(_BaseValidator2.BaseValidator);