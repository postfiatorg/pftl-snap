"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
var _reactPlayer = _interopRequireDefault(require("react-player"));
var _Skeleton2 = require("../Skeleton");
var _Player2 = require("./Player.styles");
var _jsxRuntime = require("react/jsx-runtime");
var _Skeleton, _PlayerSkeleton;
var _excluded = ["className", "style"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
/**
 * Player from <a href="https://github.com/CookPete/react-player" target="_blank" rel="noreferrer noopener">this repo</a>
 */
var Player = exports["default"] = /*#__PURE__*/function (_Component) {
  function Player() {
    var _this;
    (0, _classCallCheck2["default"])(this, Player);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, Player, [].concat(args));
    (0, _defineProperty2["default"])(_this, "state", {
      ready: false,
      playing: false
    });
    return _this;
  }
  (0, _inherits2["default"])(Player, _Component);
  return (0, _createClass2["default"])(Player, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style,
        rest = (0, _objectWithoutProperties2["default"])(_this$props, _excluded);
      var _this$state = this.state,
        playing = _this$state.playing,
        ready = _this$state.ready;
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Player2.PlayerRoot, {
        className: className,
        style: style,
        onClick: function onClick() {
          return _this2.setState({
            playing: !playing
          });
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactPlayer["default"], _objectSpread(_objectSpread({
          controls: true
        }, rest), {}, {
          width: "100%",
          height: "100%",
          playing: playing,
          fallback: _Skeleton || (_Skeleton = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Skeleton2.Skeleton, {})),
          onReady: function onReady() {
            return _this2.setState({
              ready: true
            });
          }
        })), !ready && (_PlayerSkeleton || (_PlayerSkeleton = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Player2.PlayerSkeleton, {
          className: "player-skeleton"
        })))]
      });
    }
  }]);
}(_react.Component);