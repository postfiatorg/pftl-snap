import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { ModalContext } from "./ModalContext";
import { useModalReducer } from "./hooks/useModalReducer";
import { ModalActionType } from "./ModalProvider.types";
import { jsx as _jsx } from "react/jsx-runtime";
export default function ModalProvider(_ref) {
  var children = _ref.children;
  var _useModalReducer = useModalReducer(),
    _useModalReducer2 = _slicedToArray(_useModalReducer, 2),
    state = _useModalReducer2[0],
    dispatch = _useModalReducer2[1];
  var providerValue = {
    showModal: function showModal(Modal, props) {
      return dispatch({
        type: ModalActionType.SHOW_MODAL,
        payload: {
          Modal: Modal,
          props: props || {}
        }
      });
    },
    hideModal: function hideModal(modal) {
      return dispatch({
        type: ModalActionType.HIDE_MODAL,
        payload: modal
      });
    },
    removeModal: function removeModal(id) {
      return dispatch({
        type: ModalActionType.REMOVE_MODAL,
        payload: id
      });
    },
    overrideModal: function overrideModal(Modal, props) {
      return dispatch({
        type: ModalActionType.OVERRIDE_MODAL,
        payload: {
          Modal: Modal,
          props: props || {}
        }
      });
    },
    isModalActive: function isModalActive(modal) {
      return state.some(function (_ref2) {
        var Modal = _ref2.Modal;
        return typeof modal === "string" ? Modal.id === modal : Modal.id === modal.id;
      });
    },
    modals: state
  };
  return /*#__PURE__*/_jsx(ModalContext.Provider, {
    value: providerValue,
    children: children
  });
}