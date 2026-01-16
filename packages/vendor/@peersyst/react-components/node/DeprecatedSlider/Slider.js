"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Slider;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _Slider = require("./Slider.styles");
var _reactUtils = require("@peersyst/react-utils");
var _FormControl = require("../FormControl");
var _FormControlLabel = require("../FormControlLabel");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["min", "max", "defaultValue", "step", "disabled", "LabelProps", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Slider(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Slider", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.min,
    min = _useMergeDefaultProps2 === void 0 ? 0 : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.max,
    max = _useMergeDefaultProps3 === void 0 ? 100 : _useMergeDefaultProps3,
    defaultValueProp = _useMergeDefaultProps.defaultValue,
    _useMergeDefaultProps4 = _useMergeDefaultProps.step,
    step = _useMergeDefaultProps4 === void 0 ? 1 : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps5 === void 0 ? false : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps6 === void 0 ? {} : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps7 === void 0 ? _FormControlLabel.FormControlLabel : _useMergeDefaultProps7,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var defaultValue = defaultValueProp != null ? defaultValueProp : min;
  var styleProps = {
    disabled: disabled
  };
  return (
    /*#__PURE__*/
    // @ts-ignore
    (0, _jsxRuntime.jsx)(_FormControl.FormControl, _objectSpread(_objectSpread({
      Label: [Label, LabelProps],
      defaultValue: defaultValue,
      disabled: disabled
    }, rest), {}, {
      children: function children(value, setValue) {
        var handleChange = function handleChange(_ref) {
          var target = _ref.target;
          var numberValue = Number(target.value);
          setValue(Number(numberValue));
        };
        var percentage = value > max ? "100%" : (value - min) / (max - min) * 100 + "%";
        return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Slider.SliderRoot, _objectSpread(_objectSpread({}, styleProps), {}, {
          className: (0, _reactUtils.cx)("Slider", disabled && "Disabled"),
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.SliderRail, {
            className: (0, _reactUtils.cx)("SliderRail", disabled && "Disabled")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.SliderTrack, {
            style: {
              width: percentage
            },
            className: (0, _reactUtils.cx)("SliderTrack", disabled && "Disabled")
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Slider.SliderInput, {
            type: "range",
            min: min,
            max: max,
            step: step,
            value: value,
            onChange: handleChange,
            disabled: disabled,
            className: (0, _reactUtils.cx)("SliderInput", disabled && "Disabled")
          })]
        }));
      }
    }))
  );
}