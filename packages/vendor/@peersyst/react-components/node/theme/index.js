"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  ThemeProvider: true,
  ThemeOverrideProvider: true,
  useTheme: true,
  useSetTheme: true,
  useColor: true,
  ThemeContext: true,
  ThemeConsumer: true,
  ThemeOverrideContext: true
};
Object.defineProperty(exports, "ThemeConsumer", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.ThemeConsumer;
  }
});
Object.defineProperty(exports, "ThemeContext", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.ThemeContext;
  }
});
Object.defineProperty(exports, "ThemeOverrideContext", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.ThemeOverrideContext;
  }
});
Object.defineProperty(exports, "ThemeOverrideProvider", {
  enumerable: true,
  get: function get() {
    return _ThemeOverrideProvider["default"];
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function get() {
    return _ThemeProvider["default"];
  }
});
Object.defineProperty(exports, "useColor", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useColor;
  }
});
Object.defineProperty(exports, "useSetTheme", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useSetTheme;
  }
});
Object.defineProperty(exports, "useTheme", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useTheme;
  }
});
var _createTheme = require("./createTheme");
Object.keys(_createTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _createTheme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createTheme[key];
    }
  });
});
var _theme = require("./theme.types");
Object.keys(_theme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _theme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _theme[key];
    }
  });
});
var _darkTheme = require("./darkTheme");
Object.keys(_darkTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _darkTheme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _darkTheme[key];
    }
  });
});
var _defaultTheme = require("./defaultTheme");
Object.keys(_defaultTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _defaultTheme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _defaultTheme[key];
    }
  });
});
var _lightTheme = require("./lightTheme");
Object.keys(_lightTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _lightTheme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _lightTheme[key];
    }
  });
});
var _shadows = require("./shadows");
Object.keys(_shadows).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _shadows[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _shadows[key];
    }
  });
});
var _createTheme2 = require("./createTheme.types");
Object.keys(_createTheme2).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _createTheme2[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _createTheme2[key];
    }
  });
});
var _typography = require("./typography");
Object.keys(_typography).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _typography[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typography[key];
    }
  });
});
var _ThemeProvider = _interopRequireWildcard(require("./ThemeProvider"));
Object.keys(_ThemeProvider).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _ThemeProvider[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ThemeProvider[key];
    }
  });
});
var _ThemeOverrideProvider = _interopRequireDefault(require("./ThemeOverrideProvider"));
var _withThemeClassName = require("./withThemeClassName");
Object.keys(_withThemeClassName).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _withThemeClassName[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withThemeClassName[key];
    }
  });
});
var _withTheme = require("./withTheme");
Object.keys(_withTheme).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _withTheme[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _withTheme[key];
    }
  });
});
var _reactComponentsCore = require("@peersyst/react-components-core");
require("./theme");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }