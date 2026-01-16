import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["getTrigger", "target"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useEffect, useRef, useState } from "react";
function defaultTrigger(store, options) {
  var _store$current2;
  var _options$disableHyste = options.disableHysteresis,
    disableHysteresis = _options$disableHyste === void 0 ? false : _options$disableHyste,
    _options$threshold = options.threshold,
    threshold = _options$threshold === void 0 ? 100 : _options$threshold,
    target = options.target;
  var previous = store.current;
  if (target && typeof window !== "undefined") {
    // Get vertical scroll
    store.current = target.scrollY !== undefined ? target.scrollY : target.scrollTop;
  }
  if (!disableHysteresis && previous !== undefined) {
    var _store$current;
    if (((_store$current = store.current) != null ? _store$current : 0) < previous) {
      return false;
    }
  }
  return ((_store$current2 = store.current) != null ? _store$current2 : 0) > threshold;
}
export default function useScrollTrigger() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$getTrigger = options.getTrigger,
    getTrigger = _options$getTrigger === void 0 ? defaultTrigger : _options$getTrigger,
    optionsTarget = options.target,
    other = _objectWithoutProperties(options, _excluded);
  var store = useRef();
  var _useState = useState(function () {
      return getTrigger(store, other);
    }),
    _useState2 = _slicedToArray(_useState, 2),
    trigger = _useState2[0],
    setTrigger = _useState2[1];
  useEffect(function () {
    var target = optionsTarget || window;
    var handleScroll = function handleScroll() {
      setTrigger(getTrigger(store, _objectSpread({
        target: target
      }, other)));
    };
    handleScroll(); // Re-evaluate trigger when dependencies change
    target == null || target.addEventListener("scroll", handleScroll);
    return function () {
      target == null || target.removeEventListener("scroll", handleScroll);
    };
  }, [optionsTarget, getTrigger, JSON.stringify(other)]);
  return trigger;
}