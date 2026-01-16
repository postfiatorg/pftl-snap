"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function _default(src, fallback, onLoad, onError) {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = (0, _slicedToArray2["default"])(_useState5, 2),
    fallbackError = _useState6[0],
    setFallbackError = _useState6[1];
  (0, _react.useEffect)(function () {
    if (loaded) setLoaded(false);
    if (error) setError(false);
    if (fallbackError) setFallbackError(false);
  }, [src]);
  (0, _react.useEffect)(function () {
    if (error) setError(false);
    if (fallbackError) setFallbackError(false);
  }, [fallback]);
  var handleLoad = function handleLoad(e) {
    setLoaded(true);
    if (!error) onLoad == null || onLoad(e);
  };
  var handleError = function handleError(e) {
    if (!error) {
      setError(true);
      onError == null || onError(e);
    } else {
      setFallbackError(true);
      setLoaded(true);
    }
  };
  var computedSrc = function () {
    if (!!src && !error) return src;else if (!fallbackError) return fallback;else return undefined;
  }();
  return {
    src: computedSrc,
    handleLoad: handleLoad,
    handleError: handleError,
    loaded: loaded,
    error: error,
    fallbackError: fallbackError
  };
}