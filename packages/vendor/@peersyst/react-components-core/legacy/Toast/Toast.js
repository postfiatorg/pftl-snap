import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect } from "react";
import { useControlled } from "@peersyst/react-hooks";

/**
 * @deprecated Use `useToast` instead.
 */
export default function Toast(_ref) {
  var type = _ref.type,
    duration = _ref.duration,
    propOpen = _ref.open,
    onClose = _ref.onClose,
    children = _ref.children;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return children(open, setOpen);
}