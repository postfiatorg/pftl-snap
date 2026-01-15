"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function _default(active, hash, gap, rowRef, hashRef, copyButtonRef) {
  var _useState = (0, _react.useState)(hash.length),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    autoLength = _useState2[0],
    setAutoLength = _useState2[1];
  (0, _react.useEffect)(function () {
    setAutoLength(hash.length);
  }, [hash]);
  var setAddressLength = (0, _react.useCallback)(function (rowE) {
    if (hashRef.current) {
      var _hashRef$current, _copyButtonRef$curren;
      var rowWidth = rowE.clientWidth;
      var addressWidth = ((_hashRef$current = hashRef.current) == null ? void 0 : _hashRef$current.clientWidth) || 0;
      var copyButtonWidth = ((_copyButtonRef$curren = copyButtonRef.current) == null ? void 0 : _copyButtonRef$curren.clientWidth) || 0;
      var gapWidth = copyButtonWidth ? gap : 0;
      var computedWidth = Math.floor(autoLength * (rowWidth - gapWidth - copyButtonWidth) / addressWidth);
      var newLength = Math.max(Math.min(computedWidth, hash.length), 1);
      if (newLength > autoLength + 1 || newLength < autoLength) {
        setAutoLength(newLength);
      }
    }
  }, [hash, gap, hashRef, copyButtonRef, autoLength]);
  var observer = (0, _react.useMemo)(function () {
    return new ResizeObserver(function (_ref) {
      var _ref2 = (0, _slicedToArray2["default"])(_ref, 1),
        rowObs = _ref2[0];
      setAddressLength(rowObs.target);
    });
  }, [setAddressLength]);
  (0, _react.useEffect)(function () {
    var currentRowRef = rowRef.current;
    if (active && currentRowRef) observer.observe(currentRowRef);
    return function () {
      if (active && currentRowRef) observer.disconnect();
    };
  }, [rowRef, active]);
  (0, _react.useEffect)(function () {
    if (active && rowRef.current) setAddressLength(rowRef.current);
  }, [rowRef, setAddressLength, active]);
  return autoLength;
}