import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import { useState, useEffect } from "react";
import useShare from "./useShare";
export default function useShareData(shareData) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    onShare = _ref.onShare,
    onShareFailed = _ref.onShareFailed;
  var _useShare = useShare(),
    share = _useShare.share,
    canShareFn = _useShare.canShare,
    isSharing = _useShare.isSharing;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    canShare = _useState2[0],
    setCanShare = _useState2[1];
  useEffect(function () {
    try {
      if (canShareFn(shareData)) setCanShare(true);
    } catch (e) {
      setCanShare(false);
    }
  }, [shareData]);
  var shareFn = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      return _regeneratorRuntime.wrap(function _callee$(_context) {
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