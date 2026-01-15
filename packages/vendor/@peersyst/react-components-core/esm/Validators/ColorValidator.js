import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import { BaseValidator } from "./BaseValidator";
import { isColor, isHexColor, isHslColor, isHwbColor, isLabColor, isNameColor, isRgbColor, isSpecialNameColor } from "@peersyst/react-utils";
var colorValidators = {
  hex: isHexColor,
  hsl: isHslColor,
  name: isNameColor,
  rgb: isRgbColor,
  "special-name": isSpecialNameColor,
  hwb: isHwbColor,
  lab: isLabColor
};
export var ColorValidator = /*#__PURE__*/function (_BaseValidator) {
  _inherits(ColorValidator, _BaseValidator);
  function ColorValidator(type, message, translate) {
    var _this;
    _classCallCheck(this, ColorValidator);
    _this = _callSuper(this, ColorValidator, [message != null ? message : translate("invalid_color")]);
    if (type === true) _this.colorValidators = [isColor];else if (Array.isArray(type)) _this.colorValidators = type.map(function (t) {
      return colorValidators[t];
    });else _this.colorValidators = [colorValidators[type]];
    return _this;
  }
  _createClass(ColorValidator, [{
    key: "validate",
    value: function validate(value) {
      if (!value) return true;
      return this.colorValidators.some(function (v) {
        return v(value);
      });
    }
  }]);
  return ColorValidator;
}(BaseValidator);