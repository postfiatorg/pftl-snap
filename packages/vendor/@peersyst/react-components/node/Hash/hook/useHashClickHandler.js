"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useHashOnClickHandler;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _reactHooks = require("@peersyst/react-hooks");
var _useShareHash = _interopRequireDefault(require("./useShareHash"));
function useHashOnClickHandler(_ref) {
  var action = _ref.action,
    hash = _ref.hash,
    hashToShareData = _ref.hashToShareData;
  var _useCopyToClipboard = (0, _reactHooks.useCopyToClipboard)(),
    copyToClipboard = _useCopyToClipboard.copyToClipboard;
  var shareHash = (0, _useShareHash["default"])();
  function handleClick() {
    return _handleClick.apply(this, arguments);
  }
  function _handleClick() {
    _handleClick = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      return _regenerator["default"].wrap(function _callee$(_context) {
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