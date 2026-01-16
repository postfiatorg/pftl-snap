"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
var _TableOverlay = require("./TableOverlay.styles");
var _clsx = _interopRequireDefault(require("clsx"));
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableLoadingOverlay = function TableLoadingOverlay(_ref) {
  var containerRef = _ref.containerRef,
    headerRef = _ref.headerRef,
    children = _ref.children,
    className = _ref.className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var _useState = (0, _react.useState)({
      top: 0,
      width: 0,
      height: 0
    }),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loadingOverlayRect = _useState2[0],
    setLoadingOverlayRect = _useState2[1];
  (0, _react.useEffect)(function () {
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
  (0, _react.useEffect)(function () {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableOverlay.TableOverlayRoot, {
    className: (0, _clsx["default"])("TableOverlay", className),
    style: _objectSpread(_objectSpread({}, style), {}, {
      top: loadingOverlayRect.top,
      width: loadingOverlayRect.width,
      height: loadingOverlayRect.height
    }),
    children: children
  });
};
var _default = exports["default"] = TableLoadingOverlay;