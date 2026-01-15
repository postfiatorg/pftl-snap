"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorValidator = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _BaseValidator2 = require("./BaseValidator");
var _reactUtils = require("@peersyst/react-utils");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var colorValidators = {
  hex: _reactUtils.isHexColor,
  hsl: _reactUtils.isHslColor,
  name: _reactUtils.isNameColor,
  rgb: _reactUtils.isRgbColor,
  "special-name": _reactUtils.isSpecialNameColor,
  hwb: _reactUtils.isHwbColor,
  lab: _reactUtils.isLabColor
};
var ColorValidator = exports.ColorValidator = /*#__PURE__*/function (_BaseValidator) {
  (0, _inherits2["default"])(ColorValidator, _BaseValidator);
  function ColorValidator(type, message, translate) {
    var _this;
    (0, _classCallCheck2["default"])(this, ColorValidator);
    _this = _callSuper(this, ColorValidator, [message != null ? message : translate("invalid_color")]);
    if (type === true) _this.colorValidators = [_reactUtils.isColor];else if (Array.isArray(type)) _this.colorValidators = type.map(function (t) {
      return colorValidators[t];
    });else _this.colorValidators = [colorValidators[type]];
    return _this;
  }
  (0, _createClass2["default"])(ColorValidator, [{
    key: "validate",
    value: function validate(value) {
      if (!value) return true;
      return this.colorValidators.some(function (v) {
        return v(value);
      });
    }
  }]);
  return ColorValidator;
}(_BaseValidator2.BaseValidator);