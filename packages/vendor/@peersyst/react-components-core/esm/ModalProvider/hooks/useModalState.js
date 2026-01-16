import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["onExited"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { useContext } from "react";
import { ModalContext } from "../ModalContext";
import { createElement as _createElement } from "react";
export function useModalState() {
  var _useContext = useContext(ModalContext),
    modals = _useContext.modals,
    removeModal = _useContext.removeModal;
  return modals.map(function (_ref, i) {
    var Modal = _ref.Modal,
      _ref$props = _ref.props,
      _onExited = _ref$props.onExited,
      rest = _objectWithoutProperties(_ref$props, _excluded);
    return /*#__PURE__*/_createElement(Modal, _objectSpread(_objectSpread({}, rest), {}, {
      key: i.toString(),
      onExited: function onExited() {
        _onExited == null || _onExited();
        removeModal(Modal.id);
      }
    }));
  });
}