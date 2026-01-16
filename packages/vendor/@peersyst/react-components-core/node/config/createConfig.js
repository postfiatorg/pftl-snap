"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createConfigCore;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _reactUtils = require("@peersyst/react-utils");
var _createThemes = _interopRequireDefault(require("../theme/createThemes"));
var _excluded = ["theme", "themes", "translate", "validators", "components", "locale"],
  _excluded2 = ["theme", "themes", "translate", "validators", "components", "locale"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function createConfigCore(_ref, _ref2) {
  var defaultTheme = _ref.theme,
    defaultThemes = _ref.themes,
    defaultTranslate = _ref.translate,
    defaultValidators = _ref.validators,
    defaultComponents = _ref.components,
    defaultLocale = _ref.locale,
    restDefaults = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = _ref2.theme,
    themes = _ref2.themes,
    translate = _ref2.translate,
    validators = _ref2.validators,
    components = _ref2.components,
    locale = _ref2.locale,
    extraConfig = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  return _objectSpread({
    theme: theme || defaultTheme,
    themes: (0, _createThemes["default"])(defaultThemes, themes),
    translate: translate || defaultTranslate,
    locale: locale || defaultLocale,
    validators: _objectSpread(_objectSpread({}, defaultValidators), validators),
    components: (0, _reactUtils.deepmerge)(defaultComponents, components || {})
  }, (0, _reactUtils.deepmerge)(restDefaults, extraConfig));
}