import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["defaultValue", "disabled", "readonly", "placeholder", "prefix", "suffix", "selectOnFocus", "autoFocus", "autoCapitalize", "autoComplete", "autoCorrect", "spellCheck", "maxLength", "onSubmit", "validators", "customValidators", "children", "errorElement", "validElement", "LabelProps", "Label", "format", "parse", "onKeyDown", "onBlur", "onFocus"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { createRef, useState } from "react";
import { Row } from "../Row";
import { ErrorElementWrapper, TextInputRoot, ValidElementWrapper } from "./TextInput.styles";
import { cx } from "@peersyst/react-utils";
import { useTheme } from "../theme";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { useMergeDefaultProps, useTextInputValidation } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function TextInput(props) {
  var _ValidElementWrapper, _ErrorElementWrapper;
  var _useMergeDefaultProps = useMergeDefaultProps("TextInput", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultValue,
    defaultValue = _useMergeDefaultProps2 === void 0 ? "" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.readonly,
    readonly = _useMergeDefaultProps4 === void 0 ? false : _useMergeDefaultProps4,
    placeholder = _useMergeDefaultProps.placeholder,
    prefix = _useMergeDefaultProps.prefix,
    suffix = _useMergeDefaultProps.suffix,
    selectOnFocus = _useMergeDefaultProps.selectOnFocus,
    autoFocus = _useMergeDefaultProps.autoFocus,
    autoCapitalize = _useMergeDefaultProps.autoCapitalize,
    autoComplete = _useMergeDefaultProps.autoComplete,
    autoCorrect = _useMergeDefaultProps.autoCorrect,
    spellCheck = _useMergeDefaultProps.spellCheck,
    maxLength = _useMergeDefaultProps.maxLength,
    onSubmit = _useMergeDefaultProps.onSubmit,
    validators = _useMergeDefaultProps.validators,
    customValidators = _useMergeDefaultProps.customValidators,
    _children = _useMergeDefaultProps.children,
    errorElementProp = _useMergeDefaultProps.errorElement,
    validElementProp = _useMergeDefaultProps.validElement,
    _useMergeDefaultProps5 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps5 === void 0 ? {} : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps6 === void 0 ? FormControlLabel : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.format,
    format = _useMergeDefaultProps7 === void 0 ? function (x) {
      return x;
    } : _useMergeDefaultProps7,
    _useMergeDefaultProps8 = _useMergeDefaultProps.parse,
    parse = _useMergeDefaultProps8 === void 0 ? function (x) {
      return x;
    } : _useMergeDefaultProps8,
    onKeyDown = _useMergeDefaultProps.onKeyDown,
    _onBlur = _useMergeDefaultProps.onBlur,
    _onFocus = _useMergeDefaultProps.onFocus,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var validation = useTextInputValidation(validators, customValidators);
  var _useTheme = useTheme(),
    _useTheme$icons = _useTheme.icons,
    Invalid = _useTheme$icons.invalid,
    Valid = _useTheme$icons.valid;
  var errorElement = errorElementProp === true ? /*#__PURE__*/_jsx(Invalid, {}) : errorElementProp != null ? errorElementProp : /*#__PURE__*/_jsx(Invalid, {});
  var validElement = validElementProp === true ? /*#__PURE__*/_jsx(Valid, {}) : validElementProp != null ? validElementProp : /*#__PURE__*/_jsx(Valid, {});
  var ref = /*#__PURE__*/createRef();
  return /*#__PURE__*/_jsx(FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps],
    defaultValue: defaultValue,
    disabled: disabled,
    readonly: readonly,
    validation: validation
  }, rest), {}, {
    children: function children(value, setValue, _ref) {
      var invalid = _ref.invalid,
        valid = _ref.valid,
        focused = _ref.focused,
        setFocused = _ref.setFocused;
      var handleChange = function handleChange(e) {
        var newValue = e.currentTarget.value;
        setValue(parse(newValue, value));
      };
      var wrapperStyleProps = {
        invalid: invalid,
        valid: valid,
        focused: focused,
        active: active,
        disabled: disabled,
        readonly: readonly
      };
      return /*#__PURE__*/_jsx(TextInputRoot, _objectSpread(_objectSpread({
        className: cx("TextInput", focused && "Focused", active && "Active", invalid && "Invalid", valid && "Valid", disabled && "Disabled", readonly && "Readonly"),
        onMouseDown: function onMouseDown() {
          return setActive(true);
        },
        onMouseUp: function onMouseUp() {
          return setActive(false);
        },
        onClick: function onClick() {
          var _ref$current;
          return (_ref$current = ref.current) == null ? void 0 : _ref$current.focus();
        }
      }, wrapperStyleProps), {}, {
        children: /*#__PURE__*/_jsxs(Row, {
          alignItems: "center",
          gap: 8,
          flex: 1,
          children: [prefix, _children({
            ref: ref,
            value: format(value),
            setValue: setValue,
            placeholder: placeholder,
            onChange: handleChange,
            disabled: disabled,
            onFocus: function onFocus() {
              var _ref$current2;
              setFocused(true);
              _onFocus == null || _onFocus();
              if (selectOnFocus) (_ref$current2 = ref.current) == null || _ref$current2.select();
            },
            onBlur: function onBlur() {
              setFocused(false);
              _onBlur == null || _onBlur();
            },
            readOnly: readonly,
            autoFocus: autoFocus,
            autoComplete: autoComplete ? "on" : "off",
            autoCorrect: autoCorrect ? "on" : "off",
            autoCapitalize: autoCapitalize ? "on" : "off",
            spellCheck: spellCheck,
            maxLength: maxLength,
            onSubmit: onSubmit,
            onKeyDown: onKeyDown
          }), suffix, valid && validElement && (_ValidElementWrapper || (_ValidElementWrapper = /*#__PURE__*/_jsx(ValidElementWrapper, {
            children: validElement
          }))), invalid && errorElement && (_ErrorElementWrapper || (_ErrorElementWrapper = /*#__PURE__*/_jsx(ErrorElementWrapper, {
            children: errorElement
          })))]
        })
      }));
    }
  }));
}