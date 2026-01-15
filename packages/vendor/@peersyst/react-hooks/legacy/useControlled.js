import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useState } from "react";
export default function useControlled(defaultValue, value, onChange) {
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var handleChange = function handleChange(v) {
    if (value === undefined) setState(v);
    onChange == null || onChange(v);
  };
  return [value != null ? value : state, handleChange];
}