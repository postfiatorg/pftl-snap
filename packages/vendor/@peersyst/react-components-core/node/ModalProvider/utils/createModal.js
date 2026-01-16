"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createModal;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _hooks = require("../hooks");
var _jsxRuntime = require("react/jsx-runtime");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function createModal(Component) {
  var id = new Date().getTime().toString();
  var HigherOrderModal = function HigherOrderModal(props) {
    var _useModal = (0, _hooks.useModal)(),
      hideModal = _useModal.hideModal;
    var close = function close() {
      return hideModal(id);
    };

    // @ts-ignore
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread({
      id: id,
      close: close
    }, props));
  };
  var Modal = HigherOrderModal;
  Modal.id = id;
  return Modal;
}