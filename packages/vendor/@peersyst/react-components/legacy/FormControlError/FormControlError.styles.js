import styled from "styled-components";
import { FormControlHint } from "../FormControlHint";
export var FormControlErrorRoot = styled(FormControlHint).attrs({
  light: false
})(function (_ref) {
  var theme = _ref.theme;
  return {
    color: theme.palette.status.error
  };
});