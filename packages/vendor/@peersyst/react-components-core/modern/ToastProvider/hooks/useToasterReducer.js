import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import { ToasterActionType } from "../ToastProvider.types";
import { useReducer } from "react";
var reducer = function reducer(state, action) {
  switch (action.type) {
    case ToasterActionType.SHOW_TOAST:
      if (state.length) {
        state[0].props = _objectSpread(_objectSpread({}, state[0].props), {}, {
          open: false
        });
      }
      return state.length < 2 ? state.concat({
        content: action.payload.content,
        props: _objectSpread(_objectSpread({}, action.payload.props), {}, {
          key: new Date().getMilliseconds()
        })
      }) : state;
    case ToasterActionType.HIDE_TOAST:
      return state.map(function (t, i) {
        return i === 0 ? {
          content: t.content,
          props: _objectSpread(_objectSpread({}, t.props), {}, {
            open: false
          })
        } : t;
      });
    case ToasterActionType.REMOVE_TOAST:
      return state.slice(1);
  }
};
export function useToasterReducer() {
  return useReducer(reducer, []);
}