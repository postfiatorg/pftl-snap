"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = require("react");
function useMediaQuery(query) {
  var getMatches = function getMatches(query) {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  var _useState = (0, _react.useState)(getMatches(query)),
    _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
    matches = _useState2[0],
    setMatches = _useState2[1];
  function handleChange() {
    setMatches(getMatches(query));
  }
  (0, _react.useEffect)(function () {
    var matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    matchMedia.addEventListener("change", handleChange);
    return function () {
      matchMedia.removeEventListener("change", handleChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  return matches;
}
var _default = exports["default"] = useMediaQuery;