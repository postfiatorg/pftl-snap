"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useModalState = useModalState;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = require("react");
var _ModalContext = require("../ModalContext");
var _excluded = ["onExited"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function useModalState() {
  var _useContext = (0, _react.useContext)(_ModalContext.ModalContext),
    modals = _useContext.modals,
    removeModal = _useContext.removeModal;
  return modals.map(function (_ref, i) {
    var Modal = _ref.Modal,
      _ref$props = _ref.props,
      _onExited = _ref$props.onExited,
      rest = (0, _objectWithoutProperties2["default"])(_ref$props, _excluded);
    return /*#__PURE__*/(0, _react.createElement)(Modal, _objectSpread(_objectSpread({}, rest), {}, {
      key: i.toString(),
      onExited: function onExited() {
        _onExited == null || _onExited();
        removeModal(Modal.id);
      }
    }));
  });
}