import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["min", "max", "defaultValue", "step", "disabled", "LabelProps", "Label"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { SliderInput, SliderRail, SliderRoot, SliderTrack } from "./Slider.styles";
import { cx } from "@peersyst/react-utils";
import { FormControl } from "../FormControl";
import { FormControlLabel } from "../FormControlLabel";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function Slider(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Slider", props),
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
    Label = _useMergeDefaultProps7 === void 0 ? FormControlLabel : _useMergeDefaultProps7,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var defaultValue = defaultValueProp != null ? defaultValueProp : min;
  var styleProps = {
    disabled: disabled
  };
  return (
    /*#__PURE__*/
    // @ts-ignore
    _jsx(FormControl, _objectSpread(_objectSpread({
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
        return /*#__PURE__*/_jsxs(SliderRoot, _objectSpread(_objectSpread({}, styleProps), {}, {
          className: cx("Slider", disabled && "Disabled"),
          children: [/*#__PURE__*/_jsx(SliderRail, {
            className: cx("SliderRail", disabled && "Disabled")
          }), /*#__PURE__*/_jsx(SliderTrack, {
            style: {
              width: percentage
            },
            className: cx("SliderTrack", disabled && "Disabled")
          }), /*#__PURE__*/_jsx(SliderInput, {
            type: "range",
            min: min,
            max: max,
            step: step,
            value: value,
            onChange: handleChange,
            disabled: disabled,
            className: cx("SliderInput", disabled && "Disabled")
          })]
        }));
      }
    }))
  );
}