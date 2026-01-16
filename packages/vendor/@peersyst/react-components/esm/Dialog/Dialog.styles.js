import styled from "styled-components";
import { Modal } from "../Modal";
import { DIALOG_SIZES_MAP } from "./Dialog.constants";
export var DialogRoot = styled(Modal)(function (_ref) {
  var size = _ref.size;
  return {
    padding: 0,
    maxWidth: DIALOG_SIZES_MAP[size] || size,
    width: "100%",
    height: "auto",
    margin: "32px"
  };
});
export var DialogTitle = styled.h2(function (_ref2) {
  var theme = _ref2.theme;
  return {
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: theme.palette.text,
    padding: "1rem",
    flex: "0 0 auto"
  };
});
export var DialogBody = styled.div({
  padding: "0 1rem",
  flex: "1 1 auto",
  overflowY: "auto",
  fontSize: "1rem"
});
export var DialogActions = styled.div({
  padding: "1rem",
  flex: "0 0 auto"
});