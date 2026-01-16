import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from "react";
import { useControlled } from "@peersyst/react-hooks";
export default function (defaultValue, value, onChange) {
  var _useControlled = useControlled(defaultValue, value, onChange),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    state = _useControlled2[0],
    setState = _useControlled2[1];
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    modified = _useState2[0],
    setModified = _useState2[1];
  useEffect(function () {
    if (state && !modified) setModified(true);
  }, [modified, state]);
  return {
    state: [state, setState],
    modified: modified
  };
}