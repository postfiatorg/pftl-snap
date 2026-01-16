import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
import styled from "styled-components";
import { emphasize } from "@peersyst/react-utils";
export var SwitchRoot = styled.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: block;\n    box-sizing: border-box;\n    position: relative;\n    isolation: isolate;\n    width: 60px;\n    height: 32px;\n    border-radius: 36px;\n    cursor: pointer;\n    transition: 0.4s;\n\n    &.Disabled,\n    &.Readonly {\n        cursor: default;\n        pointer-events: none;\n        * {\n            pointer-events: none;\n        }\n    }\n\n    &.Disabled {\n        opacity: 0.6;\n    }\n"])));
export var SwitchTrack = styled.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    position: relative;\n    display: block;\n    width: 100%;\n    height: 100%;\n    padding: 4px;\n    background-color: ", ";\n    transition: background-color 0.2s;\n    border-radius: inherit;\n    box-shadow: inset 0 2px 3px 0 rgba(0, 0, 0, 0.25);\n"])), function (_ref) {
  var theme = _ref.theme,
    checked = _ref.checked;
  return checked ? theme.palette.primary : emphasize(theme.palette.text, 0.5);
});
export var SwitchThumb = styled.span(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    display: block;\n    width: 50%;\n    height: 100%;\n    border-radius: 50%;\n    background-color: white;\n    box-shadow: ", ";\n    transform: ", ";\n    transition: transform 0.2s;\n"])), function (_ref2) {
  var theme = _ref2.theme;
  return theme.shadows[2];
}, function (_ref3) {
  var checked = _ref3.checked;
  return checked && "translateX(100%)";
});
export var SwitchChildren = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    width: 100%;\n    height: 100%;\n    padding: 4px;\n\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"])));