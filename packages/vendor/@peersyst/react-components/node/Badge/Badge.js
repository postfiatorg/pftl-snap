"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _Badge = require("./Badge.styles");
var _Animated = require("../Animated");
var _reactUtils = require("@peersyst/react-utils");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["position", "content", "children", "max", "invisible", "overlap", "showZero", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Badge = function Badge(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("Badge", props),
    position = _useMergeDefaultProps.position,
    content = _useMergeDefaultProps.content,
    children = _useMergeDefaultProps.children,
    _useMergeDefaultProps2 = _useMergeDefaultProps.max,
    max = _useMergeDefaultProps2 === void 0 ? 99 : _useMergeDefaultProps2,
    _useMergeDefaultProps3 = _useMergeDefaultProps.invisible,
    invisible = _useMergeDefaultProps3 === void 0 ? false : _useMergeDefaultProps3,
    _useMergeDefaultProps4 = _useMergeDefaultProps.overlap,
    overlap = _useMergeDefaultProps4 === void 0 ? "rectangular" : _useMergeDefaultProps4,
    _useMergeDefaultProps5 = _useMergeDefaultProps.showZero,
    showZero = _useMergeDefaultProps5 === void 0 ? false : _useMergeDefaultProps5,
    className = _useMergeDefaultProps.className,
    rest = (0, _objectWithoutProperties2["default"])(_useMergeDefaultProps, _excluded);
  var translate = "translate(".concat((position == null ? void 0 : position.horizontal) === "left" ? "-50%" : "50%", ", ").concat((position == null ? void 0 : position.vertical) === "bottom" ? "50%" : "-50%", ")");
  var transformOrigin = "".concat((position == null ? void 0 : position.horizontal) === "left" ? "0%" : "100%", " ").concat((position == null ? void 0 : position.vertical) === "bottom" ? "100%" : "0%");
  var transform = {
    entering: {
      transform: "scale(1) ".concat(translate)
    },
    entered: {
      transform: "scale(1) ".concat(translate)
    },
    exiting: {
      transform: "scale(0) ".concat(translate)
    },
    exited: {
      transform: "scale(0) ".concat(translate)
    }
  };
  var hasContent = !!content || showZero && content === 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Badge.BadgeRoot, {
    className: "BadgeRoot",
    children: [_react.Children.only(children), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Animated.Animated, {
      appear: false,
      animation: transform,
      animatedProperties: "transform",
      "in": !invisible && hasContent,
      duration: 200,
      style: {
        transformOrigin: transformOrigin
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge.BadgeItem, _objectSpread(_objectSpread({
        position: {
          vertical: (position == null ? void 0 : position.vertical) || "top",
          horizontal: (position == null ? void 0 : position.horizontal) || "right"
        },
        overlap: overlap,
        hasContent: hasContent,
        className: (0, _reactUtils.cx)("Badge", className)
      }, rest), {}, {
        children: typeof content === "number" && content > max ? max + "+" : content
      }))
    })]
  });
};
var _default = exports["default"] = Badge;