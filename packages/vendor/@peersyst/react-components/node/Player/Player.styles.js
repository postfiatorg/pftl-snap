"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerSkeleton = exports.PlayerRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _Skeleton = require("../Skeleton");
var _templateObject, _templateObject2;
var PlayerRoot = exports.PlayerRoot = _styledComponents["default"].div(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: relative;\n"])));
var PlayerSkeleton = exports.PlayerSkeleton = (0, _styledComponents["default"])(_Skeleton.Skeleton)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"])));