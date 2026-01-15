import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { useShare } from "@peersyst/react-hooks";
export default function useShareHash() {
  var _useShare = useShare(),
    canShare = _useShare.canShare,
    share = _useShare.share;
  function shareHash(_x) {
    return _shareHash.apply(this, arguments);
  }
  function _shareHash() {
    _shareHash = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
      var _hashToShareData;
      var hash, hashToShareData, shareData;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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