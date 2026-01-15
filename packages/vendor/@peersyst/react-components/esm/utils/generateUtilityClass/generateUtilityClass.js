import { capitalize } from "@peersyst/react-utils";
var globalStateClassesMapping = {
  active: "Active",
  checked: "Checked",
  completed: "Completed",
  disabled: "Disabled",
  error: "Error",
  expanded: "Expanded",
  focused: "Focused",
  focusVisible: "FocusVisible",
  required: "Required",
  selected: "Selected"
};
export default function generateUtilityClass(componentName, slot) {
  var globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || "".concat(componentName).concat(capitalize(slot));
}