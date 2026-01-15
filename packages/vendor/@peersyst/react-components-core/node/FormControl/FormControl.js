"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _hook = require("./hook");
var _react = require("react");
var _Form = require("../Form");
var _FormControlContext = _interopRequireDefault(require("./FormControlContext"));
var _useTranslate = _interopRequireDefault(require("../config/hook/useTranslate"));
var _jsxRuntime = require("react/jsx-runtime");
function FormControl(_ref) {
  var name = _ref.name,
    defaultValue = _ref.defaultValue,
    valueProp = _ref.value,
    onChange = _ref.onChange,
    validation = _ref.validation,
    _ref$error = _ref.error,
    errorProp = _ref$error === void 0 ? false : _ref$error,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$readonly = _ref.readonly,
    readonly = _ref$readonly === void 0 ? false : _ref$readonly,
    _ref$hideError = _ref.hideError,
    hideError = _ref$hideError === void 0 ? false : _ref$hideError,
    _ref$showValid = _ref.showValid,
    showValid = _ref$showValid === void 0 ? false : _ref$showValid,
    onValidated = _ref.onValidated,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    children = _ref.children;
  var translate = (0, _useTranslate["default"])();
  var _useFormControlled = (0, _hook.useFormControlled)(defaultValue, valueProp, onChange),
    _useFormControlled$st = (0, _slicedToArray2["default"])(_useFormControlled.state, 2),
    value = _useFormControlled$st[0],
    setValue = _useFormControlled$st[1],
    modified = _useFormControlled.modified;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    invalid = _useState2[0],
    setInvalid = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    focused = _useState4[0],
    setFocused = _useState4[1];
  var _useState5 = (0, _react.useState)(),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    error = _useState6[0],
    setError = _useState6[1];
  (0, _Form.useFormNotification)(name, value, !invalid);
  var _useMemo = (0, _react.useMemo)(function () {
      return Array.isArray(errorProp) ? errorProp : [errorProp, undefined];
    }, [errorProp]),
    _useMemo2 = (0, _slicedToArray2["default"])(_useMemo, 2),
    errorPropValue = _useMemo2[0],
    errorPropMessage = _useMemo2[1];
  (0, _react.useEffect)(function () {
    var isValueInvalid;
    var errorMsg;
    if (errorPropValue) {
      isValueInvalid = true;
      errorMsg = errorPropMessage;
    } else if (required && (value === undefined || value === false || value === "")) {
      isValueInvalid = true;
      errorMsg = translate("invalid_required");
    } else if (validation) {
      var _validation = validation(value),
        _validation2 = (0, _slicedToArray2["default"])(_validation, 2),
        validationResult = _validation2[0],
        validationError = _validation2[1];
      if (!validationResult) {
        isValueInvalid = true;
        errorMsg = validationError;
      } else {
        isValueInvalid = false;
        errorMsg = undefined;
      }
    } else {
      isValueInvalid = false;
      errorMsg = undefined;
    }
    setInvalid(isValueInvalid);
    setError(errorMsg);
    if (modified || errorPropValue) onValidated == null || onValidated(isValueInvalid, errorMsg);
  }, [value, required, validation, modified, errorProp]);
  var handleFocus = function handleFocus(f) {
    if (f) onFocus == null || onFocus();else onBlur == null || onBlur();
    setFocused(f);
  };
  var isInvalid = !hideError && (modified || errorPropValue) && invalid;
  var isValid = showValid && !isInvalid && modified;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControlContext["default"].Provider, {
    value: {
      required: required,
      invalid: isInvalid,
      valid: isValid,
      disabled: disabled,
      readonly: readonly,
      focused: focused,
      setFocused: handleFocus
    },
    children: children(value, function (val) {
      if (!disabled && !readonly) setValue(val);
    }, handleFocus, !modified || hideError ? undefined : error)
  });
}
var _default = exports["default"] = FormControl;