import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["style"],
  _excluded2 = ["colorType", "defaultValue", "value", "showTextField", "readonly", "disabled", "LabelProps", "Label", "showValid", "required", "label", "TextFieldProps", "TextField"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createRef, useState } from "react";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { ColorValidator, useMergeDefaultProps, useTranslate } from "@peersyst/react-components-core";
import { ColorInputDisplay, ColorInputRoot } from "./ColorInput.styles";
import { cx } from "@peersyst/react-utils";
import { TextField } from "../TextField";
import Color from "color";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function ColorInput(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("ColorInput", props),
    colorType = _useMergeDefaultProps.colorType,
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultValue,
    defaultValue = _useMergeDefaultProps2 === void 0 ? new Color() : _useMergeDefaultProps2,
    valueProp = _useMergeDefaultProps.value,
    showTextField = _useMergeDefaultProps.showTextField,
    _useMergeDefaultProps3 = _useMergeDefaultProps.readonly,
    readonly = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps4 === void 0 ? false : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps5 === void 0 ? {} : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps6 === void 0 ? FormControlLabel : _useMergeDefaultProps6,
    showValid = _useMergeDefaultProps.showValid,
    required = _useMergeDefaultProps.required,
    label = _useMergeDefaultProps.label,
    _useMergeDefaultProps7 = _useMergeDefaultProps.TextFieldProps,
    _useMergeDefaultProps8 = _useMergeDefaultProps7 === void 0 ? {} : _useMergeDefaultProps7,
    _useMergeDefaultProps9 = _useMergeDefaultProps8.style,
    textFieldStyle = _useMergeDefaultProps9 === void 0 ? {} : _useMergeDefaultProps9,
    restTextFieldProps = _objectWithoutProperties(_useMergeDefaultProps8, _excluded),
    _useMergeDefaultProps10 = _useMergeDefaultProps.TextField,
    TextFieldComponent = _useMergeDefaultProps10 === void 0 ? TextField : _useMergeDefaultProps10,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded2);
  var translate = useTranslate();
  var _useState = useState((valueProp || defaultValue).hex()),
    _useState2 = _slicedToArray(_useState, 2),
    textFieldValue = _useState2[0],
    setTextFieldValue = _useState2[1];
  var uploadRef = /*#__PURE__*/createRef();
  var active = !disabled && !readonly;
  var handleDisplayClick = function handleDisplayClick() {
    var _uploadRef$current;
    if (active) uploadRef == null || (_uploadRef$current = uploadRef.current) == null || _uploadRef$current.click();
  };
  var handleValidation = function handleValidation() {
    var colorValidator = new ColorValidator(colorType || true, undefined, translate);
    return [colorValidator.validate(textFieldValue), colorValidator.message];
  };
  return /*#__PURE__*/_jsx(FormControl, _objectSpread(_objectSpread({
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
        var color = new Color(event.target.value);
        setValue(color);
        setTextFieldValue(color.hex().toUpperCase());
      };
      var handleTextFieldChange = function handleTextFieldChange(text) {
        setTextFieldValue(text);
        var color = new Color(text);
        setValue(color);
      };
      return /*#__PURE__*/_jsxs(ColorInputRoot, {
        hasLabel: !!label,
        className: "ColorInputRoot",
        children: [/*#__PURE__*/_jsx(ColorInputDisplay, {
          className: cx("ColorInputDisplay", focused && "Focused", invalid && "Invalid", valid && "Valid", disabled && "Disabled", readonly && "Readonly"),
          style: {
            backgroundColor: value.hex()
          },
          disabled: disabled,
          active: active,
          onClick: handleDisplayClick
        }), showTextField &&
        /*#__PURE__*/
        // @ts-ignore
        _jsx(TextFieldComponent, _objectSpread({
          value: textFieldValue,
          onChange: handleTextFieldChange,
          disabled: disabled,
          readonly: readonly,
          showValid: showValid,
          style: _objectSpread({
            flex: 1
          }, textFieldStyle),
          error: invalid
        }, restTextFieldProps)), active && /*#__PURE__*/_jsx("input", {
          ref: uploadRef,
          type: "color",
          value: value.hex(),
          onChange: handleColorChange
        })]
      });
    }
  }));
}
export default ColorInput;