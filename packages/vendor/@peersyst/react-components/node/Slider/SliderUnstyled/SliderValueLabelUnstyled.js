"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = SliderValueLabelUnstyled;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var React = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _clsx2 = _interopRequireDefault(require("clsx"));
var _sliderUnstyledClasses = _interopRequireDefault(require("./sliderUnstyledClasses"));
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var useValueLabelClasses = function useValueLabelClasses(props) {
  var open = props.open;
  var utilityClasses = {
    offset: (0, _clsx2["default"])((0, _defineProperty2["default"])({}, _sliderUnstyledClasses["default"].valueLabelOpen, open)),
    circle: _sliderUnstyledClasses["default"].valueLabelCircle,
    label: _sliderUnstyledClasses["default"].valueLabelLabel
  };
  return utilityClasses;
};

/**
 * @ignore - internal component.
 */
function SliderValueLabelUnstyled(props) {
  var children = props.children,
    className = props.className,
    value = props.value,
    theme = props.theme;
  var classes = useValueLabelClasses(props);
  return /*#__PURE__*/React.cloneElement(children, {
    className: (0, _clsx2["default"])(children.props.className)
  }, /*#__PURE__*/(0, _jsxRuntime.jsxs)(React.Fragment, {
    children: [children.props.children, /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _clsx2["default"])(classes.offset, className),
      theme: theme,
      "aria-hidden": true,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: classes.circle,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: classes.label,
          children: value
        })
      })
    })]
  }));
}
SliderValueLabelUnstyled.propTypes = {
  children: _propTypes["default"].element.isRequired,
  className: _propTypes["default"].string,
  theme: _propTypes["default"].any,
  value: _propTypes["default"].node
};