import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { Loader } from "../Loader";
import shadows from "./shadows";
import { typography } from "./typography";
import { createBreakpoints } from "./createBreakpoints";
import { coreTheme } from "@peersyst/react-components-core";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, CopyIcon, CrossIcon, ErrorIcon, HideIcon, InfoIcon, InvalidIcon, ShowIcon, SuccessIcon, WarningIcon } from "../assets/icons";
export var defaultTheme = _objectSpread(_objectSpread({}, coreTheme), {}, {
  icons: {
    info: InfoIcon,
    error: ErrorIcon,
    success: SuccessIcon,
    warning: WarningIcon,
    hide: HideIcon,
    show: ShowIcon,
    cross: CrossIcon,
    invalid: InvalidIcon,
    valid: SuccessIcon,
    check: CheckIcon,
    copy: CopyIcon,
    chevronDown: ChevronDownIcon,
    chevronUp: ChevronUpIcon
  },
  loader: Loader,
  typography: typography,
  shadows: shadows,
  breakpoints: createBreakpoints({
    mobile: 650,
    mini: 767,
    sm: 1100,
    md: 1359
  }),
  borderRadius: "5px"
});