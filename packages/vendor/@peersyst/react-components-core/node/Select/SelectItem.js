"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _SelectContext = require("./SelectContext");
var _hooks = require("./hooks");
var _utils = require("./utils");
var _jsxRuntime = require("react/jsx-runtime");
function SelectItem(_ref) {
  var value = _ref.value,
    children = _ref.children;
  var _useTransition = (0, _react.useTransition)(),
    _useTransition2 = (0, _slicedToArray2["default"])(_useTransition, 2),
    startTransition = _useTransition2[1];
  var _useContext = (0, _react.useContext)(_SelectContext.SelectContext),
    setValue = _useContext.setValue,
    setOpen = _useContext.setOpen,
    readonly = _useContext.readonly,
    selected = _useContext.value,
    multiple = _useContext.multiple,
    compare = _useContext.compare;
  var isSelected = (0, _hooks.useSelected)(value, selected, multiple, compare);
  var handleSelect = function handleSelect() {
    if (!readonly) {
      // Close if not multiple or (multiple and it is a clear item)
      (!multiple || value === undefined) && setOpen(false);
      // Do not block ui
      startTransition(function () {
        setValue((0, _utils.handleSelection)(value, selected, multiple, isSelected));
      });
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: children({
      isSelected: isSelected,
      selected: selected,
      setSelected: handleSelect,
      setOpen: setOpen,
      readonly: readonly,
      multiple: multiple
    })
  });
}
var _default = exports["default"] = SelectItem;