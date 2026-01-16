import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { useState } from "react";
export default function useCopyToClipboard() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    onCopy = _ref.onCopy;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isLoading = _useState2[0],
    setIsLoading = _useState2[1];
  function copyToClipboard(_x) {
    return _copyToClipboard.apply(this, arguments);
  }
  function _copyToClipboard() {
    _copyToClipboard = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(message) {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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