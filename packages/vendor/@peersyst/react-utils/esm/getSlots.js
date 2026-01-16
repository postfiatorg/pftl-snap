import { Children, isValidElement } from "react";
export default function (children) {
  var slots = {};
  Children.forEach(children, function (child) {
    if ( /*#__PURE__*/isValidElement(child)) {
      var elementChild = child;
      var childType = elementChild.type;
      if (typeof childType === "function" && "name" in childType) {
        slots[childType.name] = elementChild;
      }
    }
  });
  return slots;
}