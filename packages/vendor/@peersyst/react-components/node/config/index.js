"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  createConfig: true,
  defaultConfig: true,
  ConfigProvider: true,
  useComponentConfig: true,
  useAllConfig: true,
  useConfig: true,
  useDefaultProps: true,
  useMergeDefaultProps: true,
  useThemes: true,
  useTranslate: true,
  useValidators: true,
  BaseValidator: true,
  ColorValidator: true,
  EmailValidator: true,
  EndsWithValidator: true,
  EqualValidator: true,
  MaxCharsValidator: true,
  MinCharsValidator: true,
  NotNullValidator: true,
  NumberValidator: true,
  PasswordValidator: true,
  StartsWithValidator: true
};
Object.defineProperty(exports, "BaseValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.BaseValidator;
  }
});
Object.defineProperty(exports, "ColorValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.ColorValidator;
  }
});
Object.defineProperty(exports, "ConfigProvider", {
  enumerable: true,
  get: function get() {
    return _ConfigProvider["default"];
  }
});
Object.defineProperty(exports, "EmailValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.EmailValidator;
  }
});
Object.defineProperty(exports, "EndsWithValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.EndsWithValidator;
  }
});
Object.defineProperty(exports, "EqualValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.EqualValidator;
  }
});
Object.defineProperty(exports, "MaxCharsValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.MaxCharsValidator;
  }
});
Object.defineProperty(exports, "MinCharsValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.MinCharsValidator;
  }
});
Object.defineProperty(exports, "NotNullValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.NotNullValidator;
  }
});
Object.defineProperty(exports, "NumberValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.NumberValidator;
  }
});
Object.defineProperty(exports, "PasswordValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.PasswordValidator;
  }
});
Object.defineProperty(exports, "StartsWithValidator", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.StartsWithValidator;
  }
});
Object.defineProperty(exports, "createConfig", {
  enumerable: true,
  get: function get() {
    return _createConfig["default"];
  }
});
Object.defineProperty(exports, "defaultConfig", {
  enumerable: true,
  get: function get() {
    return _defaultConfig["default"];
  }
});
Object.defineProperty(exports, "useAllConfig", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useAllConfig;
  }
});
Object.defineProperty(exports, "useComponentConfig", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useComponentConfig;
  }
});
Object.defineProperty(exports, "useConfig", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useConfig;
  }
});
Object.defineProperty(exports, "useDefaultProps", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useDefaultProps;
  }
});
Object.defineProperty(exports, "useMergeDefaultProps", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useMergeDefaultProps;
  }
});
Object.defineProperty(exports, "useThemes", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useThemes;
  }
});
Object.defineProperty(exports, "useTranslate", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useTranslate;
  }
});
Object.defineProperty(exports, "useValidators", {
  enumerable: true,
  get: function get() {
    return _reactComponentsCore.useValidators;
  }
});
var _componentsConfig = require("./components.config.types");
Object.keys(_componentsConfig).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _componentsConfig[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _componentsConfig[key];
    }
  });
});
var _createConfig = _interopRequireDefault(require("./createConfig"));
var _defaultConfig = _interopRequireDefault(require("./defaultConfig"));
var _ConfigProvider = _interopRequireDefault(require("./ConfigProvider"));
var _reactComponentsCore = require("@peersyst/react-components-core");
require("./config");