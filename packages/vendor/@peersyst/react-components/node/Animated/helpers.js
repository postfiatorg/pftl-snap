"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDelay = getDelay;
exports.getDuration = getDuration;
exports.getTimingFunction = getTimingFunction;
exports.reflow = reflow;
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
function getDuration(duration, status) {
  if (typeof duration === "number") return duration;else {
    if (status === "entering" || status === "entered") return duration.enter;else return duration.exit;
  }
}
function getDelay(delay, status) {
  if (typeof delay === "number") return delay;else {
    if (status === "entering" || status === "entered") return delay.enter;else return delay.exit;
  }
}
function getTimingFunction(timingFunction, status) {
  if (!timingFunction) return undefined;
  if ((0, _typeof2["default"])(timingFunction) === "object" && "enter" in timingFunction && "exit" in timingFunction) {
    if (status === "entering" || status === "entered") return timingFunction.enter;else return timingFunction.exit;
  } else return timingFunction;
}
function reflow(node) {
  node.scrollTop;
}