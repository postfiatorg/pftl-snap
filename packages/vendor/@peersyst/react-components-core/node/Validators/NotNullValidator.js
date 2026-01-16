"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotNullValidator = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _BaseValidator2 = require("./BaseValidator");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var NotNullValidator = exports.NotNullValidator = /*#__PURE__*/function (_BaseValidator) {
  (0, _inherits2["default"])(NotNullValidator, _BaseValidator);
  function NotNullValidator(message, translate) {
    (0, _classCallCheck2["default"])(this, NotNullValidator);
    return _callSuper(this, NotNullValidator, [message != null ? message : translate("invalid_not_null")]);
  }
  (0, _createClass2["default"])(NotNullValidator, [{
    key: "validate",
    value: function validate(value) {
      return !!value;
    }
  }]);
  return NotNullValidator;
}(_BaseValidator2.BaseValidator);