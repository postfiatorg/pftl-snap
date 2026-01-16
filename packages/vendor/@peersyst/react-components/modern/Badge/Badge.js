import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["position", "content", "children", "max", "invisible", "overlap", "showZero", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Children } from "react";
import { BadgeItem, BadgeRoot } from "./Badge.styles";
import { Animated } from "../Animated";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Badge = function Badge(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Badge", props),
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
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
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
  return /*#__PURE__*/_jsxs(BadgeRoot, {
    className: "BadgeRoot",
    children: [Children.only(children), /*#__PURE__*/_jsx(Animated, {
      appear: false,
      animation: transform,
      animatedProperties: "transform",
      "in": !invisible && hasContent,
      duration: 200,
      style: {
        transformOrigin: transformOrigin
      },
      children: /*#__PURE__*/_jsx(BadgeItem, _objectSpread(_objectSpread({
        position: {
          vertical: (position == null ? void 0 : position.vertical) || "top",
          horizontal: (position == null ? void 0 : position.horizontal) || "right"
        },
        overlap: overlap,
        hasContent: hasContent,
        className: cx("Badge", className)
      }, rest), {}, {
        children: typeof content === "number" && content > max ? max + "+" : content
      }))
    })]
  });
};
export default Badge;