import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["min", "max", "defaultValue", "step", "disabled", "LabelProps", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { RangeSliderInput, RangeSliderRoot, RangeSliderRail, RangeSliderTrack } from "./RangeSlider.styles";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function RangeSlider(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("RangeSlider", props),
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
    Label = _useMergeDefaultProps5 === void 0 ? FormControlLabel : _useMergeDefaultProps5,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var defaultValue = defaultValueProp != null ? defaultValueProp : {
    min: min,
    max: max
  };
  var styleProps = {
    disabled: disabled
  };
  return /*#__PURE__*/_jsx(FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps],
    defaultValue: defaultValue,
    disabled: disabled
  }, rest), {}, {
    children: function children(value, setValue) {
      var handleChange = function handleChange(type) {
        return function (_ref) {
          var target = _ref.target;
          var numberValue = Number(target.value);
          setValue(_objectSpread(_objectSpread({}, value), {}, _defineProperty({}, type, numberValue)));
        };
      };
      var leftSliderWidth = (Number(value.max) - Number(min)) / (max - min) * 100;
      var rightSliderWidth = (Number(max) - Number(value.min)) / (max - min) * 100;
      var trackLeftPct = (value.min - min) / (max - min) * 100;
      var trackWidthPct = (value.max - value.min) / (max - min) * 100;
      return /*#__PURE__*/_jsxs(RangeSliderRoot, _objectSpread(_objectSpread({}, styleProps), {}, {
        className: cx("RangeSlider", disabled && "Disabled"),
        children: [/*#__PURE__*/_jsx(RangeSliderRail, {
          className: cx("RangeSliderRail", disabled && "Disabled")
        }), /*#__PURE__*/_jsx(RangeSliderTrack, {
          style: {
            left: "calc(".concat(trackLeftPct, "% - 10px)"),
            width: "calc(".concat(trackWidthPct, "% + 10px)")
          },
          className: cx("RangeSliderTrack", disabled && "Disabled")
        }), /*#__PURE__*/_jsx(RangeSliderInput, {
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
          className: cx("RangeSliderInput", disabled && "Disabled")
        }), /*#__PURE__*/_jsx(RangeSliderInput, {
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
          className: cx("RangeSliderInput", disabled && "Disabled")
        })]
      }));
    }
  }));
}