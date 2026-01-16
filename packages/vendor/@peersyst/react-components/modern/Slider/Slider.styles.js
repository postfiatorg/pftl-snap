import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import styled from "styled-components";
import sliderUnstyledClasses from "./SliderUnstyled/sliderUnstyledClasses";
import { generateUtilityClasses } from "../utils";
import { alpha, darken } from "@peersyst/react-utils";
import SliderValueLabelUnstyled from "./SliderUnstyled/SliderValueLabelUnstyled";
var sliderClasses = _objectSpread(_objectSpread({}, sliderUnstyledClasses), generateUtilityClasses("Slider", ["sm"]));
export var SliderRoot = styled.span(function (_ref) {
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
  })), {}, _defineProperty(_defineProperty({
    "@media print": {
      colorAdjust: "exact"
    }
  }, "&.".concat(sliderClasses.disabled), {
    pointerEvents: "none",
    cursor: "default",
    color: theme.palette.disabled
  }), "&.".concat(sliderClasses.dragging), _defineProperty({}, "& .".concat(sliderClasses.thumb, ", & .").concat(sliderClasses.track), {
    transition: "none"
  })));
});
export var SliderRail = styled.span(function (_ref2) {
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
export var SliderTrack = styled.span(function (_ref3) {
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
    backgroundColor: darken(theme.palette.primary, 0.5),
    borderColor: darken(theme.palette.primary, 0.5)
  });
});
export var SliderThumb = styled.span(function (_ref4) {
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
  }), {}, _defineProperty(_defineProperty(_defineProperty({
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
    boxShadow: "0px 0px 0px 8px ".concat(alpha(theme.palette.primary, 0.16)),
    "@media (hover: none)": {
      boxShadow: "none"
    }
  }), "&.".concat(sliderClasses.active), {
    boxShadow: "0px 0px 0px 14px ".concat(alpha(theme.palette.primary, 0.16))
  }), "&.".concat(sliderClasses.disabled), {
    "&:hover": {
      boxShadow: "none"
    }
  }));
});
export var SliderValueLabel = styled(SliderValueLabelUnstyled)(function (_ref5) {
  var _objectSpread4;
  var theme = _ref5.theme,
    _ref5$ownerState = _ref5.ownerState,
    orientation = _ref5$ownerState.orientation,
    size = _ref5$ownerState.size;
  return _objectSpread(_objectSpread(_objectSpread((_objectSpread4 = {}, _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread4, "&.".concat(sliderClasses.valueLabelOpen), {
    transform: "translateY(-100%) scale(1)"
  }), "zIndex", 1), "whiteSpace", "nowrap"), "fontSize", "0.875rem"), "fontWeight", 500), "transition", "transform 150ms"), "transform", "translateY(-100%) scale(0)"), "position", "absolute"), "backgroundColor", theme.palette.background), "boxShadow", theme.shadows[2]), _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_objectSpread4, "borderRadius", 2), "color", theme.palette.text), "display", "flex"), "alignItems", "center"), "justifyContent", "center"), "padding", "0.25rem 0.75rem")), orientation === "horizontal" && {
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
export var SliderMark = styled.span(function (_ref6) {
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
export var SliderMarkLabel = styled.span(function (_ref7) {
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