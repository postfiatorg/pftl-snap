import { useMemo } from "react";
import { itemIsSelected } from "../utils";
export function useSelected(value, selected, multiple, compare) {
  return useMemo(function () {
    return itemIsSelected(value, selected, multiple, compare);
  }, [value, selected, multiple]);
}