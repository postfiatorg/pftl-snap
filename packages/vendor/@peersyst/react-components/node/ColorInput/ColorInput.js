"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _FormControl = require("../FormControl");
var _FormControlLabel = require("../FormControlLabel");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _ColorInput = require("./ColorInput.styles");
var _reactUtils = require("@peersyst/react-utils");
var _TextField = require("../TextField");
var _color = _interopRequireDefault(require("color"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["style"],
  _excluded2 = ["colorType", "defaultValue", "value", "showTextField", "readonly", "disabled", "LabelProps", "Label", "showValid", "required", "label", "TextFieldProps", "TextField"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function ColorInput(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("ColorInput", props),
    colorType = _useMergeDefaultProps.colorType,
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultValue,
    defaultValue = _useMergeDefaultProps2 === void 0 ? new _color["default"]() : _useMergeDefaultProps2,
    valueProp = _useMergeDefaultProps.value,
    showTextField = _useMergeDefaultProps.showTextField,
    _useMergeDefaultProps3 = _useMergeDefaultProps.readonly,
    readonly = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps4 === void 0 ? false : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps5 === void 0 ? {} : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps6 === void 0 ? _FormControlLabel.FormControlLabel : _useMergeDefaultProps6,
    showValid = _useMergeDefaultProps.showValid,
    required = _useMergeDefaultProps.required,
    label = _useMergeDefaultProps.label,
    _useMergeDefaultProps7 = _useMergeDefaultProps.TextFieldProps,
    _useMergeDefaultProps8 = _useMergeDefaultProps7 === void 0 ? {} : _useMergeDefaultProps7,
    _useMergeDefaultProps9 = _useMergeDefaultProps8.style,
    textFieldStyle = _useMergeDefaultProps9 === void 0 ? {} : _useMergeDefaultProps9,
    restTextFieldProps = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps8, _excluded),
    _useMergeDefaultProps10 = _useMergeDefaultProps.TextField,
    TextFieldComponent = _useMergeDefaultProps10 === void 0 ? _TextField.TextField : _useMergeDefaultProps10,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded2);
  var translate = (0, _reactComponentsCore.useTranslate)();
  var _useState = (0, _react.useState)((valueProp || defaultValue).hex()),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    textFieldValue = _useState2[0],
    setTextFieldValue = _useState2[1];
  var uploadRef = /*#__PURE__*/(0, _react.createRef)();
  var active = !disabled && !readonly;
  var handleDisplayClick = function handleDisplayClick() {
    var _uploadRef$current;
    if (active) uploadRef == null || (_uploadRef$current = uploadRef.current) == null || _uploadRef$current.click();
  };
  var handleValidation = function handleValidation() {
    var colorValidator = new _reactComponentsCore.ColorValidator(colorType || true, undefined, translate);
    return [colorValidator.validate(textFieldValue), colorValidator.message];
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.FormControl, _objectSpread(_objectSpread({
    defaultValue: defaultValue,
    Label: [Label, LabelProps],
    readonly: readonly,
    disabled: disabled,
    showValid: showValid,
    required: required,
    validation: handleValidation,
    label: label,
    value: valueProp
  }, rest), {}, {
    children: function children(value, setValue, _ref) {
      var focused = _ref.focused,
        invalid = _ref.invalid,
        valid = _ref.valid;
      var handleColorChange = function handleColorChange(event) {
        var color = new _color["default"](event.target.value);
        setValue(color);
        setTextFieldValue(color.hex().toUpperCase());
      };
      var handleTextFieldChange = function handleTextFieldChange(text) {
        setTextFieldValue(text);
        var color = new _color["default"](text);
        setValue(color);
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_ColorInput.ColorInputRoot, {
        hasLabel: !!label,
        className: "ColorInputRoot",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ColorInput.ColorInputDisplay, {
          className: (0, _reactUtils.cx)("ColorInputDisplay", focused && "Focused", invalid && "Invalid", valid && "Valid", disabled && "Disabled", readonly && "Readonly"),
          style: {
            backgroundColor: value.hex()
          },
          disabled: disabled,
          active: active,
          onClick: handleDisplayClick
        }), showTextField &&
        /*#__PURE__*/
        // @ts-ignore
        (0, _jsxRuntime.jsx)(TextFieldComponent, _objectSpread({
          value: textFieldValue,
          onChange: handleTextFieldChange,
          disabled: disabled,
          readonly: readonly,
          showValid: showValid,
          style: _objectSpread({
            flex: 1
          }, textFieldStyle),
          error: invalid
        }, restTextFieldProps)), active && /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
          ref: uploadRef,
          type: "color",
          value: value.hex(),
          onChange: handleColorChange
        })]
      });
    }
  }));
}
var _default = exports["default"] = ColorInput;