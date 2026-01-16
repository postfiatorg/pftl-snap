"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ModalProvider;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _ModalContext = require("./ModalContext");
var _useModalReducer3 = require("./hooks/useModalReducer");
var _ModalProvider = require("./ModalProvider.types");
var _jsxRuntime = require("react/jsx-runtime");
function ModalProvider(_ref) {
  var children = _ref.children;
  var _useModalReducer = (0, _useModalReducer3.useModalReducer)(),
    _useModalReducer2 = (0, _slicedToArray2["default"])(_useModalReducer, 2),
    state = _useModalReducer2[0],
    dispatch = _useModalReducer2[1];
  var providerValue = {
    showModal: function showModal(Modal, props) {
      return dispatch({
        type: _ModalProvider.ModalActionType.SHOW_MODAL,
        payload: {
          Modal: Modal,
          props: props || {}
        }
      });
    },
    hideModal: function hideModal(modal) {
      return dispatch({
        type: _ModalProvider.ModalActionType.HIDE_MODAL,
        payload: modal
      });
    },
    removeModal: function removeModal(id) {
      return dispatch({
        type: _ModalProvider.ModalActionType.REMOVE_MODAL,
        payload: id
      });
    },
    overrideModal: function overrideModal(Modal, props) {
      return dispatch({
        type: _ModalProvider.ModalActionType.OVERRIDE_MODAL,
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalContext.ModalContext.Provider, {
    value: providerValue,
    children: children
  });
}