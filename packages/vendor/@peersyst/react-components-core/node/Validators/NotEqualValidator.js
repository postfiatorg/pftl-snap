"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotEqualValidator = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _BaseValidator2 = require("./BaseValidator");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var NotEqualValidator = exports.NotEqualValidator = /*#__PURE__*/function (_BaseValidator) {
  (0, _inherits2["default"])(NotEqualValidator, _BaseValidator);
  function NotEqualValidator(message, translate, compare) {
    var _this;
    (0, _classCallCheck2["default"])(this, NotEqualValidator);
    _this = _callSuper(this, NotEqualValidator, [message != null ? message : translate("invalid_not_equal")]);
    _this.compare = compare;
    return _this;
  }
  (0, _createClass2["default"])(NotEqualValidator, [{
    key: "validate",
    value: function validate(value) {
      return value !== this.compare;
    }
  }]);
  return NotEqualValidator;
}(_BaseValidator2.BaseValidator);