import { useMemo } from "react";
export default function () {
  var pages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var getItems = arguments.length > 1 ? arguments[1] : undefined;
  return useMemo(function () {
    var items = [];
    pages.forEach(function (page) {
      return items = items.concat(getItems(page));
    });
    return items;
  }, [pages]);
}