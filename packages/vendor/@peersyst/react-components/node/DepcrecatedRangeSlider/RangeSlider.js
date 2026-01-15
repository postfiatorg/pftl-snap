"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = RangeSlider;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _RangeSlider = require("./RangeSlider.styles");
var _reactUtils = require("@peersyst/react-utils");
var _FormControl = require("../FormControl");
var _FormControlLabel = require("../FormControlLabel");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["min", "max", "defaultValue", "step", "disabled", "LabelProps", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function RangeSlider(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("RangeSlider", props),
    min = _useMergeDefaultProps.min,
    max = _useMergeDefaultProps.max,
    defaultValueProp = _useMergeDefaultProps.defaultValue,
    _useMergeDefaultProps2 = _useMergeDefaultProps.step,
    step = _useMergeDefaultProps2 === void 0 ? 1 : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps4 === void 0 ? {} : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps5 === void 0 ? _FormControlLabel.FormControlLabel : _useMergeDefaultProps5,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var defaultValue = defaultValueProp != null ? defaultValueProp : {
    min: min,
    max: max
  };
  var styleProps = {
    disabled: disabled
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps],
    defaultValue: defaultValue,
    disabled: disabled
  }, rest), {}, {
    children: function children(value, setValue) {
      var handleChange = function handleChange(type) {
        return function (_ref) {
          var target = _ref.target;
          var numberValue = Number(target.value);
          setValue(_objectSpread(_objectSpread({}, value), {}, (0, _defineProperty2["default"])({}, type, numberValue)));
        };
      };
      var leftSliderWidth = (Number(value.max) - Number(min)) / (max - min) * 100;
      var rightSliderWidth = (Number(max) - Number(value.min)) / (max - min) * 100;
      var trackLeftPct = (value.min - min) / (max - min) * 100;
      var trackWidthPct = (value.max - value.min) / (max - min) * 100;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_RangeSlider.RangeSliderRoot, _objectSpread(_objectSpread({}, styleProps), {}, {
        className: (0, _reactUtils.cx)("RangeSlider", disabled && "Disabled"),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_RangeSlider.RangeSliderRail, {
          className: (0, _reactUtils.cx)("RangeSliderRail", disabled && "Disabled")
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangeSlider.RangeSliderTrack, {
          style: {
            left: "calc(".concat(trackLeftPct, "% - 10px)"),
            width: "calc(".concat(trackWidthPct, "% + 10px)")
          },
          className: (0, _reactUtils.cx)("RangeSliderTrack", disabled && "Disabled")
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangeSlider.RangeSliderInput, {
          type: "range",
          min: min,
          max: value.max,
          step: step,
          value: value.min,
          onChange: handleChange("min"),
          disabled: disabled,
          style: {
            left: "-20px",
            width: "max(20px, calc(".concat(leftSliderWidth, "% + 20px))")
          },
          className: (0, _reactUtils.cx)("RangeSliderInput", disabled && "Disabled")
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_RangeSlider.RangeSliderInput, {
          type: "range",
          min: value.min,
          max: max,
          step: step,
          value: value.max,
          onChange: handleChange("max"),
          disabled: disabled,
          style: {
            right: "-20px",
            width: "max(20px, calc(".concat(rightSliderWidth, "% + 20px))")
          },
          className: (0, _reactUtils.cx)("RangeSliderInput", disabled && "Disabled")
        })]
      }));
    }
  }));
}