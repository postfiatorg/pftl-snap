import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _excluded = ["name", "min", "max", "defaultValue", "disabled", "LabelProps", "Label", "size", "aria-label", "aria-labelledby", "aria-valuetext", "disableSwap", "getAriaLabel", "getAriaValueText", "isRtl", "marks", "orientation", "scale", "step", "tabIndex", "track", "valueLabelDisplay", "valueLabelFormat"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { forwardRef } from "react";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { SliderUnstyled } from "./SliderUnstyled";
import { SliderMark, SliderMarkLabel, SliderRail, SliderRoot, SliderThumb, SliderTrack, SliderValueLabel } from "./Slider.styles";
import clsx from "clsx";
import { capitalize } from "@peersyst/react-utils";
import { FormControlLabel } from "../FormControlLabel";
import { FormControl } from "../FormControl";
import { jsx as _jsx } from "react/jsx-runtime";
var extendUtilityClasses = function extendUtilityClasses(ownerState) {
  var size = ownerState.size,
    _ownerState$classes = ownerState.classes,
    classes = _ownerState$classes === void 0 ? {} : _ownerState$classes;
  return _objectSpread(_objectSpread({}, classes), {}, {
    root: clsx(classes.root, capitalize(size)),
    thumb: clsx(classes.thumb, capitalize(size))
  });
};
var Slider = /*#__PURE__*/forwardRef(function Slider(props, ref) {
  var _useMergeDefaultProps = useMergeDefaultProps("Slider", props),
    name = _useMergeDefaultProps.name,
    _useMergeDefaultProps2 = _useMergeDefaultProps.min,
    min = _useMergeDefaultProps2 === void 0 ? 0 : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.max,
    max = _useMergeDefaultProps3 === void 0 ? 100 : _useMergeDefaultProps3,
    defaultValue = _useMergeDefaultProps.defaultValue,
    _useMergeDefaultProps4 = _useMergeDefaultProps.disabled,
    disabled = _useMergeDefaultProps4 === void 0 ? false : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.LabelProps,
    LabelProps = _useMergeDefaultProps5 === void 0 ? {} : _useMergeDefaultProps5,
    _useMergeDefaultProps6 = _useMergeDefaultProps.Label,
    Label = _useMergeDefaultProps6 === void 0 ? FormControlLabel : _useMergeDefaultProps6,
    _useMergeDefaultProps7 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps7 === void 0 ? "md" : _useMergeDefaultProps7,
    ariaLabel = _useMergeDefaultProps["aria-label"],
    ariaLabelledBy = _useMergeDefaultProps["aria-labelledby"],
    ariaValueText = _useMergeDefaultProps["aria-valuetext"],
    _useMergeDefaultProps8 = _useMergeDefaultProps.disableSwap,
    disableSwap = _useMergeDefaultProps8 === void 0 ? false : _useMergeDefaultProps8,
    getAriaLabel = _useMergeDefaultProps.getAriaLabel,
    getAriaValueText = _useMergeDefaultProps.getAriaValueText,
    _useMergeDefaultProps9 = _useMergeDefaultProps.isRtl,
    isRtl = _useMergeDefaultProps9 === void 0 ? false : _useMergeDefaultProps9,
    marks = _useMergeDefaultProps.marks,
    orientation = _useMergeDefaultProps.orientation,
    scale = _useMergeDefaultProps.scale,
    step = _useMergeDefaultProps.step,
    tabIndex = _useMergeDefaultProps.tabIndex,
    track = _useMergeDefaultProps.track,
    valueLabelDisplay = _useMergeDefaultProps.valueLabelDisplay,
    valueLabelFormat = _useMergeDefaultProps.valueLabelFormat,
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  var ownerState = _objectSpread(_objectSpread({}, props), {}, {
    size: size
  });
  var classes = extendUtilityClasses(ownerState);
  return /*#__PURE__*/_jsx(FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps],
    defaultValue: defaultValue || min,
    disabled: disabled,
    name: name
  }, rest), {}, {
    children: function children(value, setValue) {
      var handleChange = function handleChange(_event, val, _activeThumb) {
        setValue(val);
      };
      return /*#__PURE__*/_jsx(SliderUnstyled, {
        value: value,
        onChange: handleChange,
        disabled: disabled,
        min: min,
        max: max,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-valuetext": ariaValueText,
        disableSwap: disableSwap,
        getAriaLabel: getAriaLabel,
        getAriaValueText: getAriaValueText,
        isRtl: isRtl,
        marks: marks,
        name: name,
        orientation: orientation,
        scale: scale,
        step: step,
        tabIndex: tabIndex,
        track: track,
        valueLabelDisplay: valueLabelDisplay,
        valueLabelFormat: valueLabelFormat,
        components: {
          Root: SliderRoot,
          Rail: SliderRail,
          Track: SliderTrack,
          Thumb: SliderThumb,
          ValueLabel: SliderValueLabel,
          Mark: SliderMark,
          MarkLabel: SliderMarkLabel
        },
        componentsProps: {
          root: _objectSpread({}, {
            ownerState: {
              size: size
            }
          }),
          thumb: _objectSpread({}, {
            ownerState: {
              size: size
            }
          }),
          track: _objectSpread({}, {
            ownerState: {
              size: size
            }
          }),
          valueLabel: _objectSpread({}, {
            ownerState: {
              size: size
            }
          })
        },
        classes: classes,
        ref: ref
      });
    }
  }));
});
export default Slider;