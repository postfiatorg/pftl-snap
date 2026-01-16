"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = require("react");
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var ErrorBoundary = exports["default"] = /*#__PURE__*/function (_Component) {
  function ErrorBoundary() {
    var _this;
    (0, _classCallCheck2["default"])(this, ErrorBoundary);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, ErrorBoundary, [].concat(args));
    (0, _defineProperty2["default"])(_this, "state", {
      hasError: false
    });
    return _this;
  }
  (0, _inherits2["default"])(ErrorBoundary, _Component);
  return (0, _createClass2["default"])(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var _this$props$onError, _this$props;
      (_this$props$onError = (_this$props = this.props).onError) == null || _this$props$onError.call(_this$props, error, info);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return children;
    }
  }]);
}(_react.Component);