"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useShareHash;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _reactHooks = require("@peersyst/react-hooks");
function useShareHash() {
  var _useShare = (0, _reactHooks.useShare)(),
    canShare = _useShare.canShare,
    share = _useShare.share;
  function shareHash(_x) {
    return _shareHash.apply(this, arguments);
  }
  function _shareHash() {
    _shareHash = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
      var _hashToShareData;
      var hash, hashToShareData, shareData;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            hash = _ref.hash, hashToShareData = _ref.hashToShareData;
            shareData = (_hashToShareData = hashToShareData == null ? void 0 : hashToShareData(hash)) != null ? _hashToShareData : {
              text: hash
            };
            if (!canShare(shareData)) {
              _context.next = 5;
              break;
            }
            _context.next = 5;
            return share(shareData);
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _shareHash.apply(this, arguments);
  }
  return shareHash;
}