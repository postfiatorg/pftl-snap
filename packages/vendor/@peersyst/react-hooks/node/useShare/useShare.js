"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useShare;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
/**
 * Share the ShareData with the native share dialog
 * only works on mobile/tablet
 * @returns
 * - canShare: if the device can share the data (ShareData) provided
 * - share: function to share the data (ShareData)
 * - isSharing: if the device is currently sharing
 */
function useShare() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    onShare = _ref.onShare,
    onShareFailed = _ref.onShareFailed;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    isSharing = _useState2[0],
    setIsSharing = _useState2[1];
  function share(_x) {
    return _share.apply(this, arguments);
  }
  function _share() {
    _share = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(shareData) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            setIsSharing(true);
            _context.prev = 1;
            if (!canShare(shareData)) {
              _context.next = 5;
              break;
            }
            _context.next = 5;
            return window.navigator.share(shareData);
          case 5:
            onShare == null || onShare();
            _context.next = 11;
            break;
          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            onShareFailed == null || onShareFailed();
          case 11:
            setIsSharing(false);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 8]]);
    }));
    return _share.apply(this, arguments);
  }
  return {
    share: share,
    canShare: canShare,
    isSharing: isSharing
  };
}
function canShare(shareData) {
  return !!shareData && (typeof window === "undefined" ? "undefined" : (0, _typeof2["default"])(window)) !== undefined && window.navigator && window.navigator.canShare && window.navigator.canShare(shareData);
}