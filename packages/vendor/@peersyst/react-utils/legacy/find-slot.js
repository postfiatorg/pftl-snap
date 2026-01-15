import { Children } from "react";

/**
 * Deprecated
 * @param children
 * @param type
 */
export default function findSlot(children, type) {
  return Children.toArray(children).find(function (child) {
    return child.type === type;
  });
}