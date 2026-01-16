import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from "react";
function useMediaQuery(query) {
  var getMatches = function getMatches(query) {
    // Prevents SSR issues
    if (typeof window !== "undefined") {
      return window.matchMedia(query).matches;
    }
    return false;
  };
  var _useState = useState(getMatches(query)),
    _useState2 = _slicedToArray(_useState, 2),
    matches = _useState2[0],
    setMatches = _useState2[1];
  function handleChange() {
    setMatches(getMatches(query));
  }
  useEffect(function () {
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
export default useMediaQuery;