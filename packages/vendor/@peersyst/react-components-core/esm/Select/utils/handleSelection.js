export function handleSelection(value) {
  var selected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var multiple = arguments.length > 2 ? arguments[2] : undefined;
  var isSelected = arguments.length > 3 ? arguments[3] : undefined;
  if (multiple) {
    if (value === undefined) return [];
    var selectedArray = selected;
    //@ts-ignore
    return isSelected ? selectedArray.filter(function (v) {
      return v !== value;
    }) : selectedArray.concat(value);
  } else return value;
}