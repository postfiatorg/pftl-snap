"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx4 = _interopRequireDefault(require("clsx"));
var _chainPropTypes = _interopRequireDefault(require("./utils/chainPropTypes"));
var _isHostComponent = _interopRequireDefault(require("./utils/isHostComponent"));
var _utils = require("../../utils");
var _sliderUnstyledClasses = require("./sliderUnstyledClasses");
var _SliderValueLabelUnstyled = _interopRequireDefault(require("./SliderValueLabelUnstyled"));
var _useSlider2 = _interopRequireWildcard(require("./useSlider"));
var _useSlotProps = _interopRequireDefault(require("./hooks/useSlotProps"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["aria-label", "aria-valuetext", "className", "component", "classes", "disableSwap", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "orientation", "scale", "step", "tabIndex", "track", "value", "valueLabelDisplay", "valueLabelFormat", "isRtl", "components", "componentsProps"];
/* eslint-disable @typescript-eslint/no-unused-vars */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Identity = function Identity(x) {
  return x;
};
var useUtilityClasses = function useUtilityClasses(ownerState) {
  var disabled = ownerState.disabled,
    dragging = ownerState.dragging,
    marked = ownerState.marked,
    orientation = ownerState.orientation,
    track = ownerState.track,
    classes = ownerState.classes;
  var slots = {
    root: ["root", disabled && "disabled", dragging && "dragging", marked && "marked", orientation === "vertical" && "vertical", track === "inverted" && "trackInverted", track === false && "trackFalse"],
    rail: ["rail"],
    track: ["track"],
    mark: ["mark"],
    markActive: ["markActive"],
    markLabel: ["markLabel"],
    markLabelActive: ["markLabelActive"],
    valueLabel: ["valueLabel"],
    thumb: ["thumb", disabled && "disabled"],
    active: ["active"],
    disabled: ["disabled"],
    focusVisible: ["focusVisible"]
  };
  return (0, _utils.composeClasses)(slots, _sliderUnstyledClasses.getSliderUtilityClass, classes);
};
var Forward = function Forward(_ref) {
  var children = _ref.children;
  return children;
};
var SliderUnstyled = /*#__PURE__*/React.forwardRef(function SliderUnstyled(props, ref) {
  var _ref2, _components$Rail, _components$Track, _components$Thumb, _components$ValueLabe, _components$Mark, _components$MarkLabel;
  var ariaLabel = props["aria-label"],
    ariaValuetext = props["aria-valuetext"],
    className = props.className,
    component = props.component,
    classesProp = props.classes,
    _props$disableSwap = props.disableSwap,
    disableSwap = _props$disableSwap === void 0 ? false : _props$disableSwap,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    getAriaLabel = props.getAriaLabel,
    getAriaValueText = props.getAriaValueText,
    _props$marks = props.marks,
    marksProp = _props$marks === void 0 ? false : _props$marks,
    _props$max = props.max,
    max = _props$max === void 0 ? 100 : _props$max,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    name = props.name,
    onChange = props.onChange,
    onChangeCommitted = props.onChangeCommitted,
    _props$orientation = props.orientation,
    orientation = _props$orientation === void 0 ? "horizontal" : _props$orientation,
    _props$scale = props.scale,
    scale = _props$scale === void 0 ? Identity : _props$scale,
    _props$step = props.step,
    step = _props$step === void 0 ? 1 : _props$step,
    tabIndex = props.tabIndex,
    _props$track = props.track,
    track = _props$track === void 0 ? "normal" : _props$track,
    valueProp = props.value,
    _props$valueLabelDisp = props.valueLabelDisplay,
    valueLabelDisplay = _props$valueLabelDisp === void 0 ? "off" : _props$valueLabelDisp,
    _props$valueLabelForm = props.valueLabelFormat,
    valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm,
    _props$isRtl = props.isRtl,
    isRtl = _props$isRtl === void 0 ? false : _props$isRtl,
    _props$components = props.components,
    components = _props$components === void 0 ? {} : _props$components,
    _props$componentsProp = props.componentsProps,
    componentsProps = _props$componentsProp === void 0 ? {} : _props$componentsProp,
    other = (0, _objectWithoutProperties2["default"])(props, _excluded);

  // all props with defaults
  // consider extracting to hook an reusing the lint rule for the varints
  var ownerState = _objectSpread(_objectSpread({}, props), {}, {
    marks: marksProp,
    classes: classesProp,
    disabled: disabled,
    isRtl: isRtl,
    max: max,
    min: min,
    orientation: orientation,
    scale: scale,
    step: step,
    track: track,
    valueLabelDisplay: valueLabelDisplay,
    valueLabelFormat: valueLabelFormat
  });
  var _useSlider = (0, _useSlider2["default"])(_objectSpread(_objectSpread({}, ownerState), {}, {
      ref: ref
    })),
    axisProps = _useSlider.axisProps,
    getRootProps = _useSlider.getRootProps,
    getHiddenInputProps = _useSlider.getHiddenInputProps,
    getThumbProps = _useSlider.getThumbProps,
    open = _useSlider.open,
    active = _useSlider.active,
    axis = _useSlider.axis,
    range = _useSlider.range,
    focusedThumbIndex = _useSlider.focusedThumbIndex,
    dragging = _useSlider.dragging,
    marks = _useSlider.marks,
    values = _useSlider.values,
    trackOffset = _useSlider.trackOffset,
    trackLeap = _useSlider.trackLeap;
  ownerState.marked = marks.length > 0 && marks.some(function (mark) {
    return mark.label;
  });
  ownerState.dragging = dragging;
  ownerState.focusedThumbIndex = focusedThumbIndex;
  var classes = useUtilityClasses(ownerState);
  var Root = (_ref2 = component != null ? component : components.Root) != null ? _ref2 : "span";
  var rootProps = (0, _useSlotProps["default"])({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    ownerState: ownerState,
    className: [classes.root, className]
  });
  var Rail = (_components$Rail = components.Rail) != null ? _components$Rail : "span";
  var railProps = (0, _useSlotProps["default"])({
    elementType: Rail,
    externalSlotProps: componentsProps.rail,
    ownerState: ownerState,
    className: classes.rail
  });
  var Track = (_components$Track = components.Track) != null ? _components$Track : "span";
  var trackProps = (0, _useSlotProps["default"])({
    elementType: Track,
    externalSlotProps: componentsProps.track,
    additionalProps: {
      style: _objectSpread(_objectSpread({}, axisProps[axis].offset(trackOffset)), axisProps[axis].leap(trackLeap))
    },
    ownerState: ownerState,
    className: classes.track
  });
  var Thumb = (_components$Thumb = components.Thumb) != null ? _components$Thumb : "span";
  var thumbProps = (0, _useSlotProps["default"])({
    elementType: Thumb,
    getSlotProps: getThumbProps,
    externalSlotProps: componentsProps.thumb,
    ownerState: ownerState
  });
  var ValueLabel = (_components$ValueLabe = components.ValueLabel) != null ? _components$ValueLabe : _SliderValueLabelUnstyled["default"];
  var valueLabelProps = (0, _useSlotProps["default"])({
    elementType: ValueLabel,
    externalSlotProps: componentsProps.valueLabel,
    ownerState: ownerState
  });
  var Mark = (_components$Mark = components.Mark) != null ? _components$Mark : "span";
  var markProps = (0, _useSlotProps["default"])({
    elementType: Mark,
    externalSlotProps: componentsProps.mark,
    ownerState: ownerState,
    className: classes.mark
  });
  var MarkLabel = (_components$MarkLabel = components.MarkLabel) != null ? _components$MarkLabel : "span";
  var markLabelProps = (0, _useSlotProps["default"])({
    elementType: MarkLabel,
    externalSlotProps: componentsProps.markLabel,
    ownerState: ownerState
  });
  var Input = components.Input || "input";
  var inputProps = (0, _useSlotProps["default"])({
    elementType: Input,
    getSlotProps: getHiddenInputProps,
    externalSlotProps: componentsProps.input,
    ownerState: ownerState
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(Root, _objectSpread(_objectSpread({}, rootProps), {}, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Rail, _objectSpread({}, railProps)), /*#__PURE__*/(0, _jsxRuntime.jsx)(Track, _objectSpread({}, trackProps)), marks.filter(function (mark) {
      return mark.value >= min && mark.value <= max;
    }).map(function (mark, index) {
      var percent = (0, _useSlider2.valueToPercent)(mark.value, min, max);
      var style = axisProps[axis].offset(percent);
      var markActive;
      if (track === false) {
        markActive = values.indexOf(mark.value) !== -1;
      } else {
        markActive = track === "normal" && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === "inverted" && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
      }
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(Mark, _objectSpread(_objectSpread(_objectSpread({
          "data-index": index
        }, markProps), !(0, _isHostComponent["default"])(Mark) && {
          markActive: markActive
        }), {}, {
          style: _objectSpread(_objectSpread({}, style), markProps.style),
          className: (0, _clsx4["default"])(markProps.className, (0, _defineProperty2["default"])({}, classes.markActive, markActive))
        })), mark.label != null ? /*#__PURE__*/(0, _jsxRuntime.jsx)(MarkLabel, _objectSpread(_objectSpread(_objectSpread({
          "aria-hidden": true,
          "data-index": index
        }, markLabelProps), !(0, _isHostComponent["default"])(MarkLabel) && {
          markLabelActive: markActive
        }), {}, {
          style: _objectSpread(_objectSpread({}, style), markLabelProps.style),
          className: (0, _clsx4["default"])(classes.markLabel, markLabelProps.className, (0, _defineProperty2["default"])({}, classes.markLabelActive, markActive)),
          children: mark.label
        })) : null]
      }, mark.value);
    }), values.map(function (value, index) {
      var percent = (0, _useSlider2.valueToPercent)(value, min, max);
      var style = axisProps[axis].offset(percent);
      var ValueLabelComponent = valueLabelDisplay === "off" ? Forward : ValueLabel;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(React.Fragment, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ValueLabelComponent, _objectSpread(_objectSpread(_objectSpread({}, !(0, _isHostComponent["default"])(ValueLabelComponent) && {
          valueLabelFormat: valueLabelFormat,
          valueLabelDisplay: valueLabelDisplay,
          value: typeof valueLabelFormat === "function" ? valueLabelFormat(scale(value), index) : valueLabelFormat,
          index: index,
          open: open === index || active === index || valueLabelDisplay === "on",
          disabled: disabled
        }), valueLabelProps), {}, {
          className: (0, _clsx4["default"])(classes.valueLabel, valueLabelProps.className),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Thumb, _objectSpread(_objectSpread({
            "data-index": index,
            "data-focusvisible": focusedThumbIndex === index
          }, thumbProps), {}, {
            className: (0, _clsx4["default"])(classes.thumb, thumbProps.className, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({}, classes.active, active === index), classes.focusVisible, focusedThumbIndex === index)),
            style: _objectSpread(_objectSpread({}, style), {}, {
              pointerEvents: disableSwap && active !== -1 && active !== index ? "none" : undefined
            }, thumbProps.style),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, _objectSpread({
              "data-index": index,
              "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
              "aria-valuenow": scale(value),
              "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
              value: values[index]
            }, inputProps))
          }))
        }))
      }, index);
    })]
  }));
});
SliderUnstyled.propTypes /* remove-proptypes */ = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The label of the slider.
   */
  "aria-label": (0, _chainPropTypes["default"])(_propTypes["default"].string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-label"] != null) {
      return new Error("MUI: You need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.");
    }
    return null;
  }),
  /**
   * The id of the element containing a label for the slider.
   */
  "aria-labelledby": _propTypes["default"].string,
  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  "aria-valuetext": (0, _chainPropTypes["default"])(_propTypes["default"].string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);
    if (range && props["aria-valuetext"] != null) {
      return new Error("MUI: You need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.");
    }
    return null;
  }),
  /**
   * @ignore
   */
  children: _propTypes["default"].node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: _propTypes["default"].object,
  /**
   * @ignore
   */
  className: _propTypes["default"].string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: _propTypes["default"].elementType,
  /**
   * The components used for each slot inside the Slider.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: _propTypes["default"].shape({
    Input: _propTypes["default"].elementType,
    Mark: _propTypes["default"].elementType,
    MarkLabel: _propTypes["default"].elementType,
    Rail: _propTypes["default"].elementType,
    Root: _propTypes["default"].elementType,
    Thumb: _propTypes["default"].elementType,
    Track: _propTypes["default"].elementType,
    ValueLabel: _propTypes["default"].elementType
  }),
  /**
   * The props used for each slot inside the Slider.
   * @default {}
   */
  componentsProps: _propTypes["default"].shape({
    input: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
    mark: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
    markLabel: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
    rail: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
    root: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
    thumb: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
    track: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]),
    valueLabel: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].shape({
      children: _propTypes["default"].element,
      className: _propTypes["default"].string,
      components: _propTypes["default"].shape({
        Root: _propTypes["default"].elementType
      }),
      open: _propTypes["default"].bool,
      style: _propTypes["default"].object,
      value: _propTypes["default"].number,
      valueLabelDisplay: _propTypes["default"].oneOf(["auto", "off", "on"])
    })])
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].number), _propTypes["default"].number]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: _propTypes["default"].bool,
  /**
   * If `true`, the active thumb doesn't swap when moving pointer over a thumb while dragging another thumb.
   * @default false
   */
  disableSwap: _propTypes["default"].bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   * This is important for screen reader users.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: _propTypes["default"].func,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   * This is important for screen reader users.
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: _propTypes["default"].func,
  /**
   * Indicates whether the theme context has rtl direction. It is set automatically.
   * @default false
   */
  isRtl: _propTypes["default"].bool,
  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks are spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   * @default false
   */
  marks: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].shape({
    label: _propTypes["default"].node,
    value: _propTypes["default"].number.isRequired
  })), _propTypes["default"].bool]),
  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   * @default 100
   */
  max: _propTypes["default"].number,
  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   * @default 0
   */
  min: _propTypes["default"].number,
  /**
   * Name attribute of the hidden `input` element.
   */
  name: _propTypes["default"].string,
  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {Event} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   * @param {number} activeThumb Index of the currently moved thumb.
   */
  onChange: _propTypes["default"].func,
  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {React.SyntheticEvent | Event} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {number | number[]} value The new value.
   */
  onChangeCommitted: _propTypes["default"].func,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: _propTypes["default"].oneOf(["horizontal", "vertical"]),
  /**
   * A transformation function, to change the scale of the slider.
   * @default (x) => x
   */
  scale: _propTypes["default"].func,
  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   * @default 1
   */
  step: _propTypes["default"].number,
  /**
   * Tab index attribute of the hidden `input` element.
   */
  tabIndex: _propTypes["default"].number,
  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   * @default 'normal'
   */
  track: _propTypes["default"].oneOf(["inverted", "normal", false]),
  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].number), _propTypes["default"].number]),
  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   * @default 'off'
   */
  valueLabelDisplay: _propTypes["default"].oneOf(["auto", "off", "on"]),
  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   * @default (x) => x
   */
  valueLabelFormat: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].string])
};
var _default = exports["default"] = SliderUnstyled;