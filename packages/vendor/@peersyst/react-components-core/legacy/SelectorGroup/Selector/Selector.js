import { useSelector } from "./hooks/useSelector";
import { Fragment as _Fragment } from "react/jsx-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
function Selector(_ref) {
  var value = _ref.value,
    children = _ref.children;
  var context = useSelector({
    value: value
  });
  return /*#__PURE__*/_jsx(_Fragment, {
    children: children(context)
  });
}
export default Selector;