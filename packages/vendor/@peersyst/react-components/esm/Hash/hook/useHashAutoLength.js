import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useCallback, useEffect, useMemo, useState } from "react";
export default function (active, hash, gap, rowRef, hashRef, copyButtonRef) {
  var _useState = useState(hash.length),
    _useState2 = _slicedToArray(_useState, 2),
    autoLength = _useState2[0],
    setAutoLength = _useState2[1];
  useEffect(function () {
    setAutoLength(hash.length);
  }, [hash]);
  var setAddressLength = useCallback(function (rowE) {
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
  var observer = useMemo(function () {
    return new ResizeObserver(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
        rowObs = _ref2[0];
      setAddressLength(rowObs.target);
    });
  }, [setAddressLength]);
  useEffect(function () {
    var currentRowRef = rowRef.current;
    if (active && currentRowRef) observer.observe(currentRowRef);
    return function () {
      if (active && currentRowRef) observer.disconnect();
    };
  }, [rowRef, active]);
  useEffect(function () {
    if (active && rowRef.current) setAddressLength(rowRef.current);
  }, [rowRef, setAddressLength, active]);
  return autoLength;
}