import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled from "styled-components";
import { cx } from "@peersyst/react-utils";
import { createComponent } from "@peersyst/react-components-core";
var Toolbar = styled.div.attrs(function (_ref) {
  var className = _ref.className;
  return {
    className: cx("Toolbar", className)
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding-left: 16px;\n    padding-right: 16px;\n    height: 64px;\n    width: 100%;\n\n    ", " {\n        height: 56px;\n    }\n"])), function (props) {
  return props.theme.breakpoints.down(650);
});
export default createComponent("Toolbar", Toolbar);