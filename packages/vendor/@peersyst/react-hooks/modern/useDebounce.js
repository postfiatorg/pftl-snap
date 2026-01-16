import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { debounce } from "@peersyst/react-utils";
import { useCallback, useState } from "react";
export default function (defaultValue) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    onChange = _ref.onChange,
    callback = _ref.callback,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 600 : _ref$delay;
  var _useState = useState(defaultValue),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = useState(defaultValue),
    _useState4 = _slicedToArray(_useState3, 2),
    debouncedValue = _useState4[0],
    setDebouncedValue = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    debouncing = _useState6[0],
    setDebouncing = _useState6[1];
  var handleChange = function handleChange(v) {
    setDebouncing(true);
    setValue(v);
    onChange == null || onChange(v);
    changeDebouncedValue(v);
  };
  var changeDebouncedValue = useCallback(debounce( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(v) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setDebouncedValue(v);
            _context.next = 3;
            return Promise.resolve(callback == null ? void 0 : callback(v));
          case 3:
            setDebouncing(false);
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), delay), [callback]);
  return {
    value: value,
    handleChange: handleChange,
    debouncedValue: debouncedValue,
    debouncing: debouncing
  };
}