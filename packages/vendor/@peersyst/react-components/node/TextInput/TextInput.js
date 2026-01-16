"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TextInput;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _Row = require("../Row");
var _TextInput = require("./TextInput.styles");
var _reactUtils = require("@peersyst/react-utils");
var _theme = require("../theme");
var _FormControl = require("../FormControl");
var _FormControlLabel = require("../FormControlLabel");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["defaultValue", "disabled", "readonly", "placeholder", "prefix", "suffix", "selectOnFocus", "autoFocus", "autoCapitalize", "autoComplete", "autoCorrect", "spellCheck", "maxLength", "onSubmit", "validators", "customValidators", "children", "errorElement", "validElement", "LabelProps", "Label", "format", "parse", "onKeyDown", "onBlur", "onFocus"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function TextInput(props) {
  var _ValidElementWrapper, _ErrorElementWrapper;
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("TextInput", props),
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
    Label = _useMergeDefaultProps6 === void 0 ? _FormControlLabel.FormControlLabel : _useMergeDefaultProps6,
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
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    active = _useState2[0],
    setActive = _useState2[1];
  var validation = (0, _reactComponentsCore.useTextInputValidation)(validators, customValidators);
  var _useTheme = (0, _theme.useTheme)(),
    _useTheme$icons = _useTheme.icons,
    Invalid = _useTheme$icons.invalid,
    Valid = _useTheme$icons.valid;
  var errorElement = errorElementProp === true ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Invalid, {}) : errorElementProp != null ? errorElementProp : /*#__PURE__*/(0, _jsxRuntime.jsx)(Invalid, {});
  var validElement = validElementProp === true ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Valid, {}) : validElementProp != null ? validElementProp : /*#__PURE__*/(0, _jsxRuntime.jsx)(Valid, {});
  var ref = /*#__PURE__*/(0, _react.createRef)();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.FormControl, _objectSpread(_objectSpread({
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
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.TextInputRoot, _objectSpread(_objectSpread({
        className: (0, _reactUtils.cx)("TextInput", focused && "Focused", active && "Active", invalid && "Invalid", valid && "Valid", disabled && "Disabled", readonly && "Readonly"),
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row.Row, {
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
          }), suffix, valid && validElement && (_ValidElementWrapper || (_ValidElementWrapper = /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.ValidElementWrapper, {
            children: validElement
          }))), invalid && errorElement && (_ErrorElementWrapper || (_ErrorElementWrapper = /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextInput.ErrorElementWrapper, {
            children: errorElement
          })))]
        })
      }));
    }
  }));
}