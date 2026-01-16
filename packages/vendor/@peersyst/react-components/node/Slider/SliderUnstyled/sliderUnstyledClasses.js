"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getSliderUtilityClass = getSliderUtilityClass;
var _utils = require("../../utils");
function getSliderUtilityClass(slot) {
  return (0, _utils.generateUtilityClass)("Slider", slot);
}
var sliderUnstyledClasses = (0, _utils.generateUtilityClasses)("Slider", ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel"]);
var _default = exports["default"] = sliderUnstyledClasses;