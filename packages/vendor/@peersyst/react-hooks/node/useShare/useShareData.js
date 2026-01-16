"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useShareData;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _useShare2 = _interopRequireDefault(require("./useShare"));
function useShareData(shareData) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    onShare = _ref.onShare,
    onShareFailed = _ref.onShareFailed;
  var _useShare = (0, _useShare2["default"])(),
    share = _useShare.share,
    canShareFn = _useShare.canShare,
    isSharing = _useShare.isSharing;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    canShare = _useState2[0],
    setCanShare = _useState2[1];
  (0, _react.useEffect)(function () {
    try {
      if (canShareFn(shareData)) setCanShare(true);
    } catch (e) {
      setCanShare(false);
    }
  }, [shareData]);
  var shareFn = /*#__PURE__*/function () {
    var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return share(shareData);
          case 3:
            onShare == null || onShare();
            _context.next = 9;
            break;
          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            onShareFailed == null || onShareFailed();
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 6]]);
    }));
    return function shareFn() {
      return _ref2.apply(this, arguments);
    };
  }();
  return {
    canShare: canShare,
    share: shareFn,
    isSharing: isSharing
  };
}