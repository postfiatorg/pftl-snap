"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _reactUtils = require("@peersyst/react-utils");
var _ProgressBar = require("./ProgressBar.styles");
var _reactComponentsCore = require("@peersyst/react-components-core");
var _jsxRuntime = require("react/jsx-runtime");
var _LoadingProgressBarTr, _LoadingProgressBarTr2, _ProgressBarLoadingTr;
var ProgressBarLoadingTrack = function ProgressBarLoadingTrack() {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [_LoadingProgressBarTr || (_LoadingProgressBarTr = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBar.LoadingProgressBarTrack1, {})), _LoadingProgressBarTr2 || (_LoadingProgressBarTr2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBar.LoadingProgressBarTrack2, {}))]
  });
};
var ProgressBar = function ProgressBar(props) {
  var _useMergeDefaultProps = (0, _reactComponentsCore.useMergeDefaultProps)("ProgressBar", props),
    value = _useMergeDefaultProps.value,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBar.ProgressBarRoot, {
    className: (0, _reactUtils.cx)("ProgressBar", className),
    style: style,
    role: "progressbar",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBar.LoadingProgressBarContainer, {
      className: "ProgressBarTrack",
      children: value === undefined ? _ProgressBarLoadingTr || (_ProgressBarLoadingTr = /*#__PURE__*/(0, _jsxRuntime.jsx)(ProgressBarLoadingTrack, {})) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBar.ProgressBarTrack, {
        className: "ProgressBarTrack",
        style: {
          transform: "translateY(-50%) scaleX(".concat(value, "%)")
        }
      })
    })
  });
};
var _default = exports["default"] = ProgressBar;