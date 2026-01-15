"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _reactUtils = require("@peersyst/react-utils");
var _react = require("react");
function _default(defaultValue) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    onChange = _ref.onChange,
    callback = _ref.callback,
    _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 600 : _ref$delay;
  var _useState = (0, _react.useState)(defaultValue),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultValue),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    debouncedValue = _useState4[0],
    setDebouncedValue = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    debouncing = _useState6[0],
    setDebouncing = _useState6[1];
  var handleChange = function handleChange(v) {
    setDebouncing(true);
    setValue(v);
    onChange == null || onChange(v);
    changeDebouncedValue(v);
  };
  var changeDebouncedValue = (0, _react.useCallback)((0, _reactUtils.debounce)( /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(v) {
      return _regenerator["default"].wrap(function _callee$(_context) {
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