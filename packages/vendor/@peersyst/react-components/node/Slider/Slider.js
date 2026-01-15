"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _SliderUnstyled = require("./SliderUnstyled");
var _Slider = require("./Slider.styles");
var _clsx = _interopRequireDefault(require("clsx"));
var _reactUtils = require("@peersyst/react-utils");
var _FormControlLabel = require("../FormControlLabel");
var _FormControl = require("../FormControl");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["name", "min", "max", "defaultValue", "disabled", "LabelProps", "Label", "size", "aria-label", "aria-labelledby", "aria-valuetext", "disableSwap", "getAriaLabel", "getAriaValueText", "isRtl", "marks", "orientation", "scale", "step", "tabIndex", "track", "valueLabelDisplay", "valueLabelFormat"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var extendUtilityClasses = function extendUtilityClasses(ownerState) {
  var size = ownerState.size,
    _ownerState$classes = ownerState.classes,
    classes = _ownerState$classes === void 0 ? {} : _ownerState$classes;
  return _objectSpread(_objectSpread({}, classes), {}, {
    root: (0, _clsx["default"])(classes.root, (0, _reactUtils.capitalize)(size)),
    thumb: (0, _clsx["default"])(classes.thumb, (0, _reactUtils.capitalize)(size))
  });
};
var Slider = /*#__PURE__*/(0, _react.forwardRef)(function Slider(props, ref) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Slider", props),
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
    Label = _useMergeDefaultProps6 === void 0 ? _FormControlLabel.FormControlLabel : _useMergeDefaultProps6,
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
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var ownerState = _objectSpread(_objectSpread({}, props), {}, {
    size: size
  });
  var classes = extendUtilityClasses(ownerState);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_FormControl.FormControl, _objectSpread(_objectSpread({
    Label: [Label, LabelProps],
    defaultValue: defaultValue || min,
    disabled: disabled,
    name: name
  }, rest), {}, {
    children: function children(value, setValue) {
      var handleChange = function handleChange(_event, val, _activeThumb) {
        setValue(val);
      };
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_SliderUnstyled.SliderUnstyled, {
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
          Root: _Slider.SliderRoot,
          Rail: _Slider.SliderRail,
          Track: _Slider.SliderTrack,
          Thumb: _Slider.SliderThumb,
          ValueLabel: _Slider.SliderValueLabel,
          Mark: _Slider.SliderMark,
          MarkLabel: _Slider.SliderMarkLabel
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
var _default = exports["default"] = Slider;