import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useEffect, useState } from "react";
export default function (breakpoints, maxBreakpoint) {
  var _useState = useState([]),
    _useState2 = _slicedToArray(_useState, 2),
    sortedBreakpoints = _useState2[0],
    setSortedBreakpoints = _useState2[1];
  useEffect(function () {
    setSortedBreakpoints([].concat(_toConsumableArray((breakpoints || []).sort(function (firstEl, secondEl) {
      return firstEl.maxWidth < secondEl.maxWidth ? -1 : 1;
    })), [// @ts-ignore
    _objectSpread({
      maxWidth: Infinity
    }, maxBreakpoint)]));
  }, [breakpoints].concat(_toConsumableArray(Object.values(maxBreakpoint))));
  return sortedBreakpoints;
}