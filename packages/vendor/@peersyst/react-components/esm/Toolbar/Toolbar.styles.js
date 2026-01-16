import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled from "styled-components";
import { cx } from "@peersyst/react-utils";
export var ToolbarRoot = styled.div.attrs(function (_ref) {
  var className = _ref.className;
  return {
    className: cx("Toolbar", className)
  };
})(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    :root {\n        --toolbar-height: 64px;\n    }\n\n    position: relative;\n    display: flex;\n    -webkit-box-align: center;\n    align-items: center;\n    box-sizing: border-box;\n    padding-left: 16px;\n    padding-right: 16px;\n    height: var(--toolbar-height);\n    width: 100%;\n\n    ", " {\n        :root {\n            --toolbar-height: 56px;\n        }\n    }\n"])), function (props) {
  return props.theme.breakpoints.down(650);
});