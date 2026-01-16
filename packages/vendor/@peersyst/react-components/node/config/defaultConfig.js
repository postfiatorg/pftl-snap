"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _theme = require("../theme");
var _components = _interopRequireDefault(require("./components.config"));
var defaultConfig = {
  themes: {
    "default": _theme.defaultTheme,
    light: _theme.lightTheme,
    dark: _theme.darkTheme
  },
  translate: function translate(w) {
    return w;
  },
  locale: "en",
  validators: {},
  components: _components["default"]
};
var _default = exports["default"] = defaultConfig;