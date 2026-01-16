"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Toast;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _reactHooks = require("@peersyst/react-hooks");
/**
 * @deprecated Use `useToast` instead.
 */
function Toast(_ref) {
  var type = _ref.type,
    duration = _ref.duration,
    propOpen = _ref.open,
    onClose = _ref.onClose,
    children = _ref.children;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return children(open, setOpen);
}