import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from "react";
export function useTabGroupSize(tabGroupRef) {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    tabGroupWidth = _useState2[0],
    setTabGroupWidth = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    tabGroupScrollLeft = _useState4[0],
    setTabGroupScrollLeft = _useState4[1];
  var _useState5 = useState(0),
    _useState6 = _slicedToArray(_useState5, 2),
    tabGroupScrollWidth = _useState6[0],
    setTabGroupScrollWidth = _useState6[1];
  var updateValues = function updateValues(newScrollLeft) {
    var tabGroup = tabGroupRef == null ? void 0 : tabGroupRef.current;
    if (tabGroup) {
      var width = Math.round(tabGroup.getBoundingClientRect().width) + 1;
      var scrollLeft = newScrollLeft || tabGroup.scrollLeft;
      var scrollWidth = tabGroup.scrollWidth;
      if (tabGroupScrollLeft !== scrollLeft || tabGroupWidth >= tabGroupScrollWidth && width < scrollWidth || tabGroupWidth < tabGroupScrollWidth && width >= tabGroupWidth) {
        setTabGroupWidth(width);
        setTabGroupScrollLeft(scrollLeft);
        setTabGroupScrollWidth(scrollWidth);
      }
    }
  };
  var resizeHandler = function resizeHandler() {
    return updateValues();
  };
  useEffect(function () {
    updateValues();
  }, []);
  useEffect(function () {
    window.addEventListener("resize", resizeHandler);
    return function () {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [tabGroupRef]);
  return {
    tabGroupWidth: tabGroupWidth,
    tabGroupScrollLeft: tabGroupScrollLeft,
    tabGroupScrollWidth: tabGroupScrollWidth,
    update: updateValues
  };
}