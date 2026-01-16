import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["type", "digits", "gap", "name", "defaultValue", "value", "onChange", "validators", "customValidators", "disabled", "readonly", "required", "hideError", "showValid", "label", "hint", "LabelProps", "Label", "error", "onValidated", "placeholder", "onBlur", "onFocus"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useMergeDefaultProps, useTextInputValidation } from "@peersyst/react-components-core";
import { FormControlLabel } from "../FormControlLabel";
import { FormControl } from "../FormControl";
import { CodeInputs } from "./CodeInputs";
import { jsx as _jsx } from "react/jsx-runtime";
var CodeField = function CodeField(rawProps) {
  var props = useMergeDefaultProps("CodeField", rawProps);
  var type = props.type,
    digits = props.digits,
    gap = props.gap,
    name = props.name,
    _props$defaultValue = props.defaultValue,
    defaultValue = _props$defaultValue === void 0 ? "" : _props$defaultValue,
    valueProp = props.value,
    onChange = props.onChange,
    _props$validators = props.validators,
    validators = _props$validators === void 0 ? [] : _props$validators,
    _props$customValidato = props.customValidators,
    customValidators = _props$customValidato === void 0 ? [] : _props$customValidato,
    disabled = props.disabled,
    readonly = props.readonly,
    required = props.required,
    _props$hideError = props.hideError,
    hideError = _props$hideError === void 0 ? true : _props$hideError,
    showValid = props.showValid,
    label = props.label,
    hint = props.hint,
    _props$LabelProps = props.LabelProps,
    LabelProps = _props$LabelProps === void 0 ? {} : _props$LabelProps,
    _props$Label = props.Label,
    Label = _props$Label === void 0 ? FormControlLabel : _props$Label,
    error = props.error,
    onValidated = props.onValidated,
    placeholder = props.placeholder,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    rest = _objectWithoutProperties(props, _excluded);
  var validation = useTextInputValidation(_objectSpread({
    minChars: [digits, ""]
  }, validators), customValidators);
  return /*#__PURE__*/_jsx(FormControl, _objectSpread(_objectSpread({
    name: name,
    label: label,
    Label: [Label, LabelProps],
    hint: hint,
    defaultValue: defaultValue,
    value: valueProp,
    onChange: onChange,
    disabled: disabled,
    readonly: readonly,
    required: required,
    validation: validation,
    hideError: hideError,
    showValid: showValid,
    error: error,
    onValidated: onValidated
  }, rest), {}, {
    children: function children(value, setValue, context) {
      return /*#__PURE__*/_jsx(CodeInputs, {
        type: type,
        digits: digits,
        gap: gap,
        placeholder: placeholder,
        value: value,
        setValue: setValue,
        context: context,
        onBlur: onBlur,
        onFocus: onFocus
      });
    }
  }));
};
export default CodeField;