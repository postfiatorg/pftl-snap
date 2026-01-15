"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModalReducer = useModalReducer;
var _react = require("react");
var _ModalProvider = require("../ModalProvider.types");
var modalIsActive = function modalIsActive(state, modal) {
  return state.some(function (_ref) {
    var Modal = _ref.Modal;
    return typeof modal === "string" ? Modal.id === modal : Modal.id === modal.id;
  });
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case _ModalProvider.ModalActionType.SHOW_MODAL:
      return modalIsActive(state, action.payload.Modal.id) ? state : state.concat(action.payload);
    case _ModalProvider.ModalActionType.HIDE_MODAL:
      var payload = action.payload;
      if (!payload) return state.slice(0, -1);
      var id = typeof payload === "string" ? payload : payload.id;
      return state.map(function (modalState) {
        if (modalState.Modal.id === id) modalState.props.open = false;
        return modalState;
      });
    case _ModalProvider.ModalActionType.REMOVE_MODAL:
      return state.filter(function (_ref2) {
        var Modal = _ref2.Modal;
        return Modal.id !== action.payload;
      });
    case _ModalProvider.ModalActionType.OVERRIDE_MODAL:
      return [action.payload];
    default:
      return state;
  }
};
function useModalReducer() {
  return (0, _react.useReducer)(reducer, []);
}