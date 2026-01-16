import { AlertAction, AlertRoot } from "./Alert.styles";
import useGetAlertIcon from "./hook/useGetAlertIcon";
import { Row } from "../Row";
import { capitalize, cx } from "@peersyst/react-utils";
import { useMergeDefaultProps } from "@peersyst/react-components-core";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var Alert = function Alert(props) {
  var _useMergeDefaultProps = useMergeDefaultProps("Alert", props),
    _useMergeDefaultProps2 = _useMergeDefaultProps.icon,
    iconProp = _useMergeDefaultProps2 === void 0 ? true : _useMergeDefaultProps2,
    content = _useMergeDefaultProps.content,
    type = _useMergeDefaultProps.type,
    action = _useMergeDefaultProps.action,
    className = _useMergeDefaultProps.className,
    style = _useMergeDefaultProps.style,
    _useMergeDefaultProps3 = _useMergeDefaultProps.elevation,
    elevation = _useMergeDefaultProps3 === void 0 ? 0 : _useMergeDefaultProps3,
    square = _useMergeDefaultProps.square;
  var defaultIcon = useGetAlertIcon(type);
  var icon = iconProp === true ? defaultIcon : iconProp;
  return /*#__PURE__*/_jsx(AlertRoot, {
    type: type,
    className: cx("Alert", type && capitalize(type), className),
    style: style,
    elevation: elevation,
    square: square,
    children: /*#__PURE__*/_jsxs(Row, {
      flex: 1,
      gap: 10,
      wrap: true,
      wrapGap: 10,
      justifyContent: "space-between",
      children: [/*#__PURE__*/_jsxs(Row, {
        flex: 1,
        alignItems: "flex-start",
        gap: 10,
        children: [/*#__PURE__*/_jsx(Row, {
          flex: 0.05,
          children: icon
        }), /*#__PURE__*/_jsx(Row, {
          flex: 0.95,
          children: content
        })]
      }), action && /*#__PURE__*/_jsx(AlertAction, {
        className: "AlertAction",
        children: action
      })]
    })
  });
};
export default Alert;