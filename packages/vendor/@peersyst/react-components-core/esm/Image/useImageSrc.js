import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from "react";
export default function (src, fallback, onLoad, onError) {
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    loaded = _useState2[0],
    setLoaded = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    fallbackError = _useState6[0],
    setFallbackError = _useState6[1];
  useEffect(function () {
    if (loaded) setLoaded(false);
    if (error) setError(false);
    if (fallbackError) setFallbackError(false);
  }, [src]);
  useEffect(function () {
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