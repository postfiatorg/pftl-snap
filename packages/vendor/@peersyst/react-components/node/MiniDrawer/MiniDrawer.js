"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _MiniDrawer = require("./MiniDrawer.styles");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["expanded", "position", "collapsedSize", "className", "size", "transitionDuration"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MiniDrawer = function MiniDrawer(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("MiniDrawer", props),
    expanded = _useMergeDefaultProps.expanded,
    _useMergeDefaultProps2 = _useMergeDefaultProps.position,
    position = _useMergeDefaultProps2 === void 0 ? "left" : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.collapsedSize,
    collapsedSize = _useMergeDefaultProps3 === void 0 ? 70 : _useMergeDefaultProps3,
    className = _useMergeDefaultProps.className,
    _useMergeDefaultProps4 = _useMergeDefaultProps.size,
    size = _useMergeDefaultProps4 === void 0 ? {
      size: 300
    } : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.transitionDuration,
    transitionDuration = _useMergeDefaultProps5 === void 0 ? "300ms" : _useMergeDefaultProps5,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_MiniDrawer.MiniDrawerRoot, _objectSpread({
    expanded: expanded,
    collapsedSize: collapsedSize,
    transitionDuration: transitionDuration,
    position: position,
    size: size,
    className: (0, _reactUtils.cx)(className, !expanded && "Collapsed")
  }, rest));
};
var _default = exports["default"] = MiniDrawer;