"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableSortButton = exports.TableHeaderTitle = exports.TableHeaderSortButtonContainer = exports.TableHeaderContent = exports.TableHeader = exports.TableHeadRoot = void 0;
var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _IconButton = require("../../IconButton");
var _reactUtils = require("@peersyst/react-utils");
var _Row = require("../../Row");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var TableHeadRoot = exports.TableHeadRoot = _styledComponents["default"].thead(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n    position: sticky;\n    z-index: 1;\n    top: 0;\n    background-color: inherit;\n\n    tr {\n        height: 3.5rem;\n\n        th {\n            border-bottom: var(--table-header-border);\n        }\n    }\n"])));
var TableHeader = exports.TableHeader = _styledComponents["default"].th(function (_ref) {
  var canSort = _ref.canSort;
  return (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2["default"])(["\n        cursor: ", ";\n\n        &:hover {\n            .TableHeaderSortButtonContainer {\n                opacity: 1;\n                width: auto;\n            }\n        }\n    "])), canSort ? "pointer" : "default");
});
var TableHeaderContent = exports.TableHeaderContent = (0, _styledComponents["default"])(_Row.Row).attrs({
  gap: "0.25rem",
  alginItems: "center"
})(function (_ref2) {
  var alignment = _ref2.alignment;
  return (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteral2["default"])(["\n        flex-direction: ", ";\n        height: 100%;\n    "])), alignment === "right" ? "row-reverse" : "row");
});
var TableHeaderTitle = exports.TableHeaderTitle = _styledComponents["default"].span(function (_ref3) {
  var alignment = _ref3.alignment;
  return (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = (0, _taggedTemplateLiteral2["default"])(["\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        text-align: ", ";\n    "])), alignment);
});
var TableHeaderSortButtonContainer = exports.TableHeaderSortButtonContainer = _styledComponents["default"].div(function (_ref4) {
  var isSorted = _ref4.isSorted;
  return (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    opacity: ", "};\n    width: ", ";\n    transition: opacity 200ms;\n"])), isSorted ? "1" : "0", isSorted ? "auto" : "0px");
});
var TableSortButton = exports.TableSortButton = (0, _styledComponents["default"])(_IconButton.IconButton)(function (_ref5) {
  var theme = _ref5.theme,
    active = _ref5.active;
  return (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = (0, _taggedTemplateLiteral2["default"])(["\n        color: ", ";\n\n        &:hover {\n            color: ", ";\n        }\n    "])), (0, _reactUtils.alpha)(theme.palette.text, active ? 0.6 : 0.35), (0, _reactUtils.alpha)(theme.palette.text, 0.5));
});