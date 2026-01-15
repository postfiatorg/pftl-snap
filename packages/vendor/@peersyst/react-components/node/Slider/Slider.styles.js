"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderValueLabel = exports.SliderTrack = exports.SliderThumb = exports.SliderRoot = exports.SliderRail = exports.SliderMarkLabel = exports.SliderMark = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _sliderUnstyledClasses = _interopRequireDefault(require("./SliderUnstyled/sliderUnstyledClasses"));
var _utils = require("../utils");
var _reactUtils = require("@peersyst/react-utils");
var _SliderValueLabelUnstyled = _interopRequireDefault(require("./SliderUnstyled/SliderValueLabelUnstyled"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var sliderClasses = _objectSpread(_objectSpread({}, _sliderUnstyledClasses["default"]), (0, _utils.generateUtilityClasses)("Slider", ["sm"]));
var SliderRoot = exports.SliderRoot = _styledComponents["default"].span(function (_ref) {
  var theme = _ref.theme,
    _ref$ownerState = _ref.ownerState,
    orientation = _ref$ownerState.orientation,
    size = _ref$ownerState.size,
    valueLabelDisplay = _ref$ownerState.valueLabelDisplay,
    marked = _ref.marked;
  return _objectSpread(_objectSpread(_objectSpread({
    borderRadius: 12,
    boxSizing: "content-box",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    touchAction: "none",
    color: theme.palette.primary,
    WebkitTapHighlightColor: "transparent"
  }, orientation === "horizontal" && _objectSpread(_objectSpread(_objectSpread({
    height: 4,
    width: "100%",
    padding: "13px 0",
    // The primary input mechanism of the device includes a pointing device of limited accuracy.
    "@media (pointer: coarse)": {
      // Reach 42px touch target, about ~8mm on screen.
      padding: "20px 0"
    }
  }, size === "sm" && {
    height: 2
  }), marked && {
    marginBottom: 20
  }), valueLabelDisplay === "on" && {
    marginTop: 24
  })), orientation === "vertical" && _objectSpread(_objectSpread({
    height: "100%",
    width: 4,
    padding: "0 13px",
    // The primary input mechanism of the device includes a pointing device of limited accuracy.
    "@media (pointer: coarse)": {
      // Reach 42px touch target, about ~8mm on screen.
      padding: "0 20px"
    }
  }, size === "sm" && {
    width: 2
  }), marked && {
    marginRight: 44
  })), {}, (0, _defineProperty2["default"])((0, _defineProperty2["default"])({
    "@media print": {
      colorAdjust: "exact"
    }
  }, "&.".concat(sliderClasses.disabled), {
    pointerEvents: "none",
    cursor: "default",
    color: theme.palette.disabled
  }), "&.".concat(sliderClasses.dragging), (0, _defineProperty2["default"])({}, "& .".concat(sliderClasses.thumb, ", & .").concat(sliderClasses.track), {
    transition: "none"
  })));
});
var SliderRail = exports.SliderRail = _styledComponents["default"].span(function (_ref2) {
  var _ref2$ownerState = _ref2.ownerState,
    orientation = _ref2$ownerState.orientation,
    track = _ref2$ownerState.track;
  return _objectSpread(_objectSpread(_objectSpread({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    backgroundColor: "currentColor",
    opacity: 0.38
  }, orientation === "horizontal" && {
    width: "100%",
    height: "inherit",
    top: "50%",
    transform: "translateY(-50%)"
  }), orientation === "vertical" && {
    height: "100%",
    width: "inherit",
    left: "50%",
    transform: "translateX(-50%)"
  }), track === "inverted" && {
    opacity: 1
  });
});
var SliderTrack = exports.SliderTrack = _styledComponents["default"].span(function (_ref3) {
  var theme = _ref3.theme,
    _ref3$ownerState = _ref3.ownerState,
    orientation = _ref3$ownerState.orientation,
    track = _ref3$ownerState.track,
    size = _ref3$ownerState.size;
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
    display: "block",
    position: "absolute",
    borderRadius: "inherit",
    border: "1px solid currentColor",
    backgroundColor: "currentColor"
  }, size === "sm" && {
    border: "none"
  }), orientation === "horizontal" && {
    height: "inherit",
    top: "50%",
    transform: "translateY(-50%)"
  }), orientation === "vertical" && {
    width: "inherit",
    left: "50%",
    transform: "translateX(-50%)"
  }), track === false && {
    display: "none"
  }), track === "inverted" && {
    backgroundColor: (0, _reactUtils.darken)(theme.palette.primary, 0.5),
    borderColor: (0, _reactUtils.darken)(theme.palette.primary, 0.5)
  });
});
var SliderThumb = exports.SliderThumb = _styledComponents["default"].span(function (_ref4) {
  var theme = _ref4.theme,
    _ref4$ownerState = _ref4.ownerState,
    orientation = _ref4$ownerState.orientation,
    size = _ref4$ownerState.size;
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread({
    position: "absolute",
    width: 20,
    height: 20,
    boxSizing: "border-box",
    borderRadius: "50%",
    outline: 0,
    backgroundColor: "currentColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "box-shadow 150ms"
  }, size === "sm" && {
    width: 12,
    height: 12
  }), orientation === "horizontal" && {
    top: "50%",
    transform: "translate(-50%, -50%)"
  }), orientation === "vertical" && {
    left: "50%",
    transform: "translate(-50%, 50%)"
  }), {}, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])({
    "&:before": _objectSpread({
      position: "absolute",
      content: '""',
      borderRadius: "inherit",
      width: "100%",
      height: "100%",
      boxShadow: theme.shadows[2]
    }, size === "sm" && {
      boxShadow: "none"
    }),
    "&:after": {
      position: "absolute",
      content: '""',
      borderRadius: "50%",
      // 42px is the hit target
      width: 42,
      height: 42,
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }
  }, "&:hover", {
    boxShadow: "0px 0px 0px 8px ".concat((0, _reactUtils.alpha)(theme.palette.primary, 0.16)),
    "@media (hover: none)": {
      boxShadow: "none"
    }
  }), "&.".concat(sliderClasses.active), {
    boxShadow: "0px 0px 0px 14px ".concat((0, _reactUtils.alpha)(theme.palette.primary, 0.16))
  }), "&.".concat(sliderClasses.disabled), {
    "&:hover": {
      boxShadow: "none"
    }
  }));
});
var SliderValueLabel = exports.SliderValueLabel = (0, _styledComponents["default"])(_SliderValueLabelUnstyled["default"])(function (_ref5) {
  var _objectSpread4;
  var theme = _ref5.theme,
    _ref5$ownerState = _ref5.ownerState,
    orientation = _ref5$ownerState.orientation,
    size = _ref5$ownerState.size;
  return _objectSpread(_objectSpread(_objectSpread((_objectSpread4 = {}, (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_objectSpread4, "&.".concat(sliderClasses.valueLabelOpen), {
    transform: "translateY(-100%) scale(1)"
  }), "zIndex", 1), "whiteSpace", "nowrap"), "fontSize", "0.875rem"), "fontWeight", 500), "transition", "transform 150ms"), "transform", "translateY(-100%) scale(0)"), "position", "absolute"), "backgroundColor", theme.palette.background), "boxShadow", theme.shadows[2]), (0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])((0, _defineProperty2["default"])(_objectSpread4, "borderRadius", 2), "color", theme.palette.text), "display", "flex"), "alignItems", "center"), "justifyContent", "center"), "padding", "0.25rem 0.75rem")), orientation === "horizontal" && {
    top: "-10px",
    transformOrigin: "bottom center",
    "&:before": {
      position: "absolute",
      content: '""',
      width: 8,
      height: 8,
      transform: "translate(-50%, 50%) rotate(45deg)",
      backgroundColor: "inherit",
      bottom: 0,
      left: "50%"
    }
  }), orientation === "vertical" && {
    right: "30px",
    top: "24px",
    transformOrigin: "right center",
    "&:before": {
      position: "absolute",
      content: '""',
      width: 8,
      height: 8,
      transform: "translate(-50%, 50%) rotate(45deg)",
      backgroundColor: "inherit",
      right: "-20%",
      top: "25%"
    }
  }), size === "sm" && {
    fontSize: "0.75rem",
    padding: "0.25rem 0.5rem"
  });
});
var SliderMark = exports.SliderMark = _styledComponents["default"].span(function (_ref6) {
  var theme = _ref6.theme,
    orientation = _ref6.ownerState.orientation,
    markActive = _ref6.markActive;
  return _objectSpread(_objectSpread(_objectSpread({
    position: "absolute",
    width: 2,
    height: 2,
    borderRadius: 1,
    backgroundColor: "currentColor"
  }, orientation === "horizontal" && {
    top: "50%",
    transform: "translate(-1px, -50%)"
  }), orientation === "vertical" && {
    left: "50%",
    transform: "translate(-50%, 1px)"
  }), markActive && {
    backgroundColor: theme.palette.background,
    opacity: 0.8
  });
});
var SliderMarkLabel = exports.SliderMarkLabel = _styledComponents["default"].span(function (_ref7) {
  var theme = _ref7.theme,
    orientation = _ref7.ownerState.orientation,
    markLabelActive = _ref7.markLabelActive;
  return _objectSpread(_objectSpread(_objectSpread({
    fontSize: "0.875rem",
    color: theme.palette.text,
    position: "absolute",
    whiteSpace: "nowrap"
  }, orientation === "horizontal" && {
    top: 30,
    transform: "translateX(-50%)",
    "@media (pointer: coarse)": {
      top: 40
    }
  }), orientation === "vertical" && {
    left: 36,
    transform: "translateY(50%)",
    "@media (pointer: coarse)": {
      left: 44
    }
  }), markLabelActive && {
    color: theme.palette.text
  });
});