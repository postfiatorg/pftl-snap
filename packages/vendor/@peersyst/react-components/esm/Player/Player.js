import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
var _Skeleton, _PlayerSkeleton;
var _excluded = ["className", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
import { Component } from "react";
import ReactPlayer from "react-player";
import { Skeleton } from "../Skeleton";
import { PlayerRoot, PlayerSkeleton } from "./Player.styles";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * Player from <a href="https://github.com/CookPete/react-player" target="_blank" rel="noreferrer noopener">this repo</a>
 */
var Player = /*#__PURE__*/function (_Component) {
  function Player() {
    var _this;
    _classCallCheck(this, Player);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Player, [].concat(args));
    _defineProperty(_this, "state", {
      ready: false,
      playing: false
    });
    return _this;
  }
  _inherits(Player, _Component);
  return _createClass(Player, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        rest = _objectWithoutProperties(_this$props, _excluded);
      var _this$state = this.state,
        playing = _this$state.playing,
        ready = _this$state.ready;
      return /*#__PURE__*/_jsxs(PlayerRoot, {
        className: className,
        style: style,
        onClick: function onClick() {
          return _this2.setState({
            playing: !playing
          });
        },
        children: [/*#__PURE__*/_jsx(ReactPlayer, _objectSpread(_objectSpread({
          controls: true
        }, rest), {}, {
          width: "100%",
          height: "100%",
          playing: playing,
          fallback: _Skeleton || (_Skeleton = /*#__PURE__*/_jsx(Skeleton, {})),
          onReady: function onReady() {
            return _this2.setState({
              ready: true
            });
          }
        })), !ready && (_PlayerSkeleton || (_PlayerSkeleton = /*#__PURE__*/_jsx(PlayerSkeleton, {
          className: "player-skeleton"
        })))]
      });
    }
  }]);
}(Component);
export { Player as default };