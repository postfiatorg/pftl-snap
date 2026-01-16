import { useEffect } from "react";
export default function (setPatterns, sortedBreakpoints, gridState) {
  useEffect(function () {
    var cb = function cb() {
      return setPatterns();
    };
    window.addEventListener("resize", cb);
    return function () {
      window.removeEventListener("resize", cb);
    };
  }, [gridState]);
  useEffect(function () {
    setPatterns(true);
  }, [sortedBreakpoints]);
}