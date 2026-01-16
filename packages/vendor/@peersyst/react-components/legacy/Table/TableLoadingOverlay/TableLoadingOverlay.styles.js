import _taggedTemplateLiteral from "@babel/runtime/helpers/esm/taggedTemplateLiteral";
var _templateObject;
import styled from "styled-components";
import { css } from "styled-components";
import { TableOverlay } from "../TableOverlay";
export var TableLoadingOverlayRoot = styled(TableOverlay)(function (_ref) {
  var theme = _ref.theme,
    loading = _ref.loading;
  return css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        opacity: ", ";\n\n        color: ", ";\n        font-size: 3rem;\n\n        transition: opacity 200ms;\n    "])), loading ? 1 : 0, theme.palette.primary);
});