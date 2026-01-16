import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["theme", "themes", "translate", "validators", "components", "locale"],
  _excluded2 = ["theme", "themes", "translate", "validators", "components", "locale"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { deepmerge } from "@peersyst/react-utils";
import createThemes from "../theme/createThemes";
export default function createConfigCore(_ref, _ref2) {
  var defaultTheme = _ref.theme,
    defaultThemes = _ref.themes,
    defaultTranslate = _ref.translate,
    defaultValidators = _ref.validators,
    defaultComponents = _ref.components,
    defaultLocale = _ref.locale,
    restDefaults = _objectWithoutProperties(_ref, _excluded);
  var theme = _ref2.theme,
    themes = _ref2.themes,
    translate = _ref2.translate,
    validators = _ref2.validators,
    components = _ref2.components,
    locale = _ref2.locale,
    extraConfig = _objectWithoutProperties(_ref2, _excluded2);
  return _objectSpread({
    theme: theme || defaultTheme,
    themes: createThemes(defaultThemes, themes),
    translate: translate || defaultTranslate,
    locale: locale || defaultLocale,
    validators: _objectSpread(_objectSpread({}, defaultValidators), validators),
    components: deepmerge(defaultComponents, components || {})
  }, deepmerge(restDefaults, extraConfig));
}