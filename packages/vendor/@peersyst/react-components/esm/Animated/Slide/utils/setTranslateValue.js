import { getTranslateValue } from "./getTranslateValue";
export function setTranslateValue(direction, node, containerProp) {
  var transform = getTranslateValue(direction, node, containerProp);
  if (transform) node.style.transform = transform;
}