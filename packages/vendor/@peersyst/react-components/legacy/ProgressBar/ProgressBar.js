var _LoadingProgressBarTr, _LoadingProgressBarTr2, _ProgressBarLoadingTr;
import { cx } from "@peersyst/react-utils";
import { LoadingProgressBarContainer, LoadingProgressBarTrack1, LoadingProgressBarTrack2, ProgressBarRoot, ProgressBarTrack } from "./ProgressBar.styles";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
var ProgressBarLoadingTrack = function ProgressBarLoadingTrack() {
  return /*#__PURE__*/_jsxs(_Fragment, {
    children: [_LoadingProgressBarTr || (_LoadingProgressBarTr = /*#__PURE__*/_jsx(LoadingProgressBarTrack1, {})), _LoadingProgressBarTr2 || (_LoadingProgressBarTr2 = /*#__PURE__*/_jsx(LoadingProgressBarTrack2, {}))]
  });
};
var ProgressBar = function ProgressBar(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("ProgressBar", props),
    value = _useMergeDefaultProps.value,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style;
  return /*#__PURE__*/_jsx(ProgressBarRoot, {
    className: cx("ProgressBar", className),
    style: style,
    role: "progressbar",
    children: /*#__PURE__*/_jsx(LoadingProgressBarContainer, {
      className: "ProgressBarTrack",
      children: value === undefined ? _ProgressBarLoadingTr || (_ProgressBarLoadingTr = /*#__PURE__*/_jsx(ProgressBarLoadingTrack, {})) : /*#__PURE__*/_jsx(ProgressBarTrack, {
        className: "ProgressBarTrack",
        style: {
          transform: "translateY(-50%) scaleX(".concat(value, "%)")
        }
      })
    })
  });
};
export default ProgressBar;