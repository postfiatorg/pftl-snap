"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RadioButton;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _RadioButton = require("./RadioButton.styles");
var _reactUtils = require("@peersyst/react-utils");
var _icons = require("../assets/icons");
var _Label = require("../Label");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _react = require("react");
var _PointerFormControl = _interopRequireDefault(require("../common/PointerFormControl"));
var _jsxRuntime = require("react/jsx-runtime");
var _RadioUncheckedIcon, _RadioCheckedIcon;
var _excluded = ["defaultValue", "icon", "checkedIcon", "disabled", "LabelProps", "hideError", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function RadioButton(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("RadioButton", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.defaultValue,
    defaultValue = _useMergeDefaultProps2 === void 0 ? false : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.icon,
    icon = _useMergeDefaultProps3 === void 0 ? _RadioUncheckedIcon || (_RadioUncheckedIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RadioUncheckedIcon, {})) : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.checkedIcon,
    checkedIcon = _useMergeDefaultProps4 === void 0 ? _RadioCheckedIcon || (_RadioCheckedIcon = /*#__PURE__*/(0, _jsxRuntime.jsx)(_icons.RadioCheckedIcon, {})) : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps5 === void 0 ? false : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps6 === void 0 ? {} : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.hideError,
    hideError = _useMergeDefaultProps7 === void 0 ? true : _useMergeDefaultProps7,
    _useMergeDefaultProps8 = _useMergeDefaultProps.Label,
    LabelProp = _useMergeDefaultProps8 === void 0 ? _Label.Label : _useMergeDefaultProps8,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var radioButtonRef = (0, _react.useRef)(null);
  var handleClick = function handleClick() {
    if (radioButtonRef.current) radioButtonRef.current.click();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PointerFormControl["default"], _objectSpread(_objectSpread({
    Label: [LabelProp, _objectSpread({
      placement: "right"
    }, LabelProps)],
    defaultValue: defaultValue,
    disabled: disabled,
    hideError: hideError,
    onClick: handleClick
  }, rest), {}, {
    children: function children(value, setValue) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_RadioButton.RadioButtonRoot, {
        className: (0, _reactUtils.cx)("RadioButton", value && "Checked", disabled && "Disabled"),
        onClick: function onClick() {
          return setValue(!value);
        },
        role: "radio",
        "aria-checked": value,
        tabIndex: 0,
        ref: radioButtonRef,
        children: value ? checkedIcon : icon
      });
    }
  }));
}