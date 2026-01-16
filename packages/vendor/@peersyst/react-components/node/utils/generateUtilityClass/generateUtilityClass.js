"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateUtilityClass;
var _reactUtils = require("@peersyst/react-utils");
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
function generateUtilityClass(componentName, slot) {
  var globalStateClass = globalStateClassesMapping[slot];
  return globalStateClass || "".concat(componentName).concat((0, _reactUtils.capitalize)(slot));
}