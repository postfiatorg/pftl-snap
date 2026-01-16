import { useReducer } from "react";
import { ModalActionType } from "../ModalProvider.types";
var modalIsActive = function modalIsActive(state, modal) {
  return state.some(function (_ref) {
    var Modal = _ref.Modal;
    return typeof modal === "string" ? Modal.id === modal : Modal.id === modal.id;
  });
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case ModalActionType.SHOW_MODAL:
      return modalIsActive(state, action.payload.Modal.id) ? state : state.concat(action.payload);
    case ModalActionType.HIDE_MODAL:
      var payload = action.payload;
      if (!payload) return state.slice(0, -1);
      var id = typeof payload === "string" ? payload : payload.id;
      return state.map(function (modalState) {
        if (modalState.Modal.id === id) modalState.props.open = false;
        return modalState;
      });
    case ModalActionType.REMOVE_MODAL:
      return state.filter(function (_ref2) {
        var Modal = _ref2.Modal;
        return Modal.id !== action.payload;
      });
    case ModalActionType.OVERRIDE_MODAL:
      return [action.payload];
    default:
      return state;
  }
};
export function useModalReducer() {
  return useReducer(reducer, []);
}