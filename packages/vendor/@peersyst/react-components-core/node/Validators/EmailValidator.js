"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmailValidator = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _BaseValidator2 = require("./BaseValidator");
var _validator = _interopRequireDefault(require("validator"));
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var EmailValidator = exports.EmailValidator = /*#__PURE__*/function (_BaseValidator) {
  (0, _inherits2["default"])(EmailValidator, _BaseValidator);
  function EmailValidator(message, translate) {
    (0, _classCallCheck2["default"])(this, EmailValidator);
    return _callSuper(this, EmailValidator, [message != null ? message : translate("invalid_email")]);
  }
  (0, _createClass2["default"])(EmailValidator, [{
    key: "validate",
    value: function validate(value) {
      if (!value) return true;
      return _validator["default"].isEmail(value);
    }
  }]);
  return EmailValidator;
}(_BaseValidator2.BaseValidator);