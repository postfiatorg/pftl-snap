import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { useEffect, useState } from "react";
export default function useAppendChild(elementId) {
  var _useState = useState(document.createElement("div")),
    _useState2 = _slicedToArray(_useState, 1),
    element = _useState2[0];
  var _useState3 = useState(document.getElementById(elementId)),
    _useState4 = _slicedToArray(_useState3, 2),
    container = _useState4[0],
    setContainer = _useState4[1];
  useEffect(function () {
    setContainer(document.getElementById(elementId));
    container == null || container.appendChild(element);
    return function () {
      container == null || container.removeChild(element);
    };
  }, [element, container, elementId]);
  return [element, container];
}