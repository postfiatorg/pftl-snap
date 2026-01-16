import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect } from "react";
import { useControlled } from "@peersyst/react-hooks";
import { useMergeDefaultProps } from "../config";
export default function useCoreToast(rawProps) {
  var props = useMergeDefaultProps("Toast", rawProps);
  var propOpen = props.open,
    onClose = props.onClose,
    duration = props.duration,
    type = props.type;
  var _useControlled = useControlled(true, propOpen, propOpen ? onClose : undefined),
    _useControlled2 = _slicedToArray(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  useEffect(function () {
    if (open && duration !== Infinity && (!type || type !== "loading")) {
      var hideTimeout = setTimeout(function () {
        return setOpen(false);
      }, duration);
      return function () {
        clearTimeout(hideTimeout);
      };
    }
  }, [open]);
  return {
    props: props,
    comps: {
      open: open,
      setOpen: setOpen
    }
  };
}