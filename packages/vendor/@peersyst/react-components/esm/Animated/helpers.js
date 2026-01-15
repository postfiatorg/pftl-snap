import _typeof from "@babel/runtime/helpers/esm/typeof";
export function getDuration(duration, status) {
  if (typeof duration === "number") return duration;else {
    if (status === "entering" || status === "entered") return duration.enter;else return duration.exit;
  }
}
export function getDelay(delay, status) {
  if (typeof delay === "number") return delay;else {
    if (status === "entering" || status === "entered") return delay.enter;else return delay.exit;
  }
}
export function getTimingFunction(timingFunction, status) {
  if (!timingFunction) return undefined;
  if (_typeof(timingFunction) === "object" && "enter" in timingFunction && "exit" in timingFunction) {
    if (status === "entering" || status === "entered") return timingFunction.enter;else return timingFunction.exit;
  } else return timingFunction;
}
export function reflow(node) {
  node.scrollTop;
}