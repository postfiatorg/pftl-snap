import clsx from "clsx";
import { Typography } from "../../../Typography";
import { jsxs as _jsxs } from "react/jsx-runtime";
var TableCount = function TableCount(_ref) {
  var range = _ref.range,
    total = _ref.total,
    className = _ref.className,
    style = _ref.style;
  return /*#__PURE__*/_jsxs(Typography, {
    className: clsx("TableCount", className),
    variant: "body2",
    style: style,
    children: [range[0], " - ", range[1], " of ", total]
  });
};
export default TableCount;