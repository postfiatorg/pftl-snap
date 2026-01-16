import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
import styled, { css } from "styled-components";
import { SelectItem } from "./SelectItem";
export var SelectRoot = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: relative;\n    width: 100%;\n"])));
export var displayBorder = css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    border: 1px solid\n        ", ";\n"])), function (_ref) {
  var theme = _ref.theme,
    open = _ref.open,
    disabled = _ref.disabled;
  if (open) return theme.palette.primary;else if (disabled) return theme.palette.disabled;else return theme.palette.text;
});
export var SelectDisplayWrapper = styled.div(function (_ref2) {
  var disabled = _ref2.disabled,
    readonly = _ref2.readonly;
  var cursor = disabled || readonly ? "default" : "pointer";
  return css(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n        display: contents;\n        cursor: ", ";\n\n        * {\n            cursor: ", ";\n        }\n    "])), cursor, cursor);
});
export var SelectDisplayTrigger = styled.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n"])));
export var SelectDisplay = styled.div(function (_ref3) {
  var theme = _ref3.theme;
  var disabledStyles = css(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        color: ", ";\n    "])), theme.palette.disabled);
  return css(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n        flex: 1;\n\n        min-height: 36px;\n\n        box-sizing: border-box;\n        padding: 0 10px;\n\n        border-radius: ", ";\n        ", ";\n\n        &&.Disabled {\n            ", "\n        }\n    "])), function (props) {
    return props.theme.borderRadius;
  }, displayBorder, disabledStyles);
});
export var DisplayContent = styled.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    margin-right: 10px;\n    max-width: 90%;\n"])));
export var SelectDropdown = styled.span(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n    display: flex;\n    font-size: 0.7em;\n    transform: ", ";\n"])), function (_ref4) {
  var open = _ref4.open;
  return open && "scale(-1)";
});
export var ClearItem = styled(SelectItem)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    font-style: italic;\n"])));