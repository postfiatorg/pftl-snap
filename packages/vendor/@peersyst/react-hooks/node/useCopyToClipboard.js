"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useCopyToClipboard;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useCopyToClipboard() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    onCopy = _ref.onCopy;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  function copyToClipboard(_x) {
    return _copyToClipboard.apply(this, arguments);
  }
  function _copyToClipboard() {
    _copyToClipboard = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(message) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsLoading(true);
            _context.next = 3;
            return navigator.clipboard.writeText(message);
          case 3:
            setIsLoading(false);
            onCopy == null || onCopy();
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _copyToClipboard.apply(this, arguments);
  }
  return {
    isLoading: isLoading,
    copyToClipboard: copyToClipboard
  };
}