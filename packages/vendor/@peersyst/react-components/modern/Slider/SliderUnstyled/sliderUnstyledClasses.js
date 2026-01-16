import { generateUtilityClass, generateUtilityClasses } from "../../utils";
export function getSliderUtilityClass(slot) {
  return generateUtilityClass("Slider", slot);
}
var sliderUnstyledClasses = generateUtilityClasses("Slider", ["root", "active", "focusVisible", "disabled", "dragging", "marked", "vertical", "trackInverted", "trackFalse", "rail", "track", "mark", "markActive", "markLabel", "markLabelActive", "thumb", "valueLabel", "valueLabelOpen", "valueLabelCircle", "valueLabelLabel"]);
export default sliderUnstyledClasses;