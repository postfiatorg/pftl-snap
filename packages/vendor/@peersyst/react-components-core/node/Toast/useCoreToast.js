"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCoreToast;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactHooks = require("@peersyst/react-hooks");
var _config = require("../config");
function useCoreToast(rawProps) {
  var props = (0, _config.useMergeDefaultProps)("Toast", rawProps);
  var propOpen = props.open,
    onClose = props.onClose,
    duration = props.duration,
    type = props.type;
  var _useControlled = (0, _reactHooks.useControlled)(true, propOpen, propOpen ? onClose : undefined),
    _useControlled2 = (0, _slicedToArray2["default"])(_useControlled, 2),
    open = _useControlled2[0],
    setOpen = _useControlled2[1];
  (0, _react.useEffect)(function () {
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