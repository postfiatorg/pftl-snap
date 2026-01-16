import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { useCopyToClipboard } from "@peersyst/react-hooks";
import useShareHash from "./useShareHash";
export default function useHashOnClickHandler(_ref) {
  var action = _ref.action,
    hash = _ref.hash,
    hashToShareData = _ref.hashToShareData;
  var _useCopyToClipboard = useCopyToClipboard(),
    copyToClipboard = _useCopyToClipboard.copyToClipboard;
  var shareHash = useShareHash();
  function handleClick() {
    return _handleClick.apply(this, arguments);
  }
  function _handleClick() {
    _handleClick = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.t0 = action;
            _context.next = _context.t0 === "copy" ? 3 : _context.t0 === "share" ? 6 : 9;
            break;
          case 3:
            _context.next = 5;
            return copyToClipboard(hash);
          case 5:
            return _context.abrupt("break", 11);
          case 6:
            _context.next = 8;
            return shareHash({
              hash: hash,
              hashToShareData: hashToShareData
            });
          case 8:
            return _context.abrupt("break", 11);
          case 9:
            if (typeof action === "function") action(hash);
            return _context.abrupt("break", 11);
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return _handleClick.apply(this, arguments);
  }
  return handleClick;
}