import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["expanded", "position", "collapsedSize", "className", "size", "transitionDuration"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { MiniDrawerRoot } from "./MiniDrawer.styles";
import { cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx } from "react/jsx-runtime";
var MiniDrawer = function MiniDrawer(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("MiniDrawer", props),
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
    rest = _objectWithoutProperties(_useMergeDefaultProps, _excluded);
  return /*#__PURE__*/_jsx(MiniDrawerRoot, _objectSpread({
    expanded: expanded,
    collapsedSize: collapsedSize,
    transitionDuration: transitionDuration,
    position: position,
    size: size,
    className: cx(className, !expanded && "Collapsed")
  }, rest));
};
export default MiniDrawer;