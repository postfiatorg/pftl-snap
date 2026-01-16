import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useState, useEffect } from "react";
import { TableOverlayRoot } from "./TableOverlay.styles";
import clsx from "clsx";
import { jsx as _jsx } from "react/jsx-runtime";
var TableLoadingOverlay = function TableLoadingOverlay(_ref) {
  var containerRef = _ref.containerRef,
    headerRef = _ref.headerRef,
    children = _ref.children,
    className = _ref.className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var _useState = useState({
      top: 0,
      width: 0,
      height: 0
    }),
    _useState2 = _slicedToArray(_useState, 2),
    loadingOverlayRect = _useState2[0],
    setLoadingOverlayRect = _useState2[1];
  useEffect(function () {
    var currentContainerRef = containerRef.current;
    if (currentContainerRef) new ResizeObserver(function () {
      var _headerRef$current;
      var newLoadingOverlayHeight = currentContainerRef.clientHeight - (((_headerRef$current = headerRef.current) == null ? void 0 : _headerRef$current.clientHeight) || 0);
      if (currentContainerRef.clientWidth !== loadingOverlayRect.width || newLoadingOverlayHeight !== loadingOverlayRect.height) setLoadingOverlayRect(function (rect) {
        return _objectSpread(_objectSpread({}, rect), {}, {
          width: currentContainerRef.clientWidth,
          height: newLoadingOverlayHeight
        });
      });
    }).observe(currentContainerRef);
  }, [containerRef]);
  useEffect(function () {
    var currentHeaderRef = headerRef.current;
    if (currentHeaderRef) new ResizeObserver(function () {
      var _containerRef$current;
      var newLoadingOverlayHeight = (((_containerRef$current = containerRef.current) == null ? void 0 : _containerRef$current.clientHeight) || 0) - currentHeaderRef.clientHeight;
      if (currentHeaderRef.clientHeight !== loadingOverlayRect.top || newLoadingOverlayHeight !== loadingOverlayRect.height) setLoadingOverlayRect(function (rect) {
        return _objectSpread(_objectSpread({}, rect), {}, {
          top: currentHeaderRef.clientHeight,
          height: newLoadingOverlayHeight
        });
      });
    }).observe(currentHeaderRef);
  }, [headerRef]);
  return /*#__PURE__*/_jsx(TableOverlayRoot, {
    className: clsx("TableOverlay", className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      top: loadingOverlayRect.top,
      width: loadingOverlayRect.width,
      height: loadingOverlayRect.height
    }),
    children: children
  });
};
export default TableLoadingOverlay;