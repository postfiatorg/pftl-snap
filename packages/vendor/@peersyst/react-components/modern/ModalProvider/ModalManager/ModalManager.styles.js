import styled from "styled-components";
export var ModalManagerRoot = styled.div(function (_ref) {
  var theme = _ref.theme;
  return {
    position: "fixed",
    zIndex: theme.zIndex.modal + 1
  };
});