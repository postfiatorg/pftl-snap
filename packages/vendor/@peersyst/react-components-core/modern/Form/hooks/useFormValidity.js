import { useContext } from "react";
import { FormContext } from "../FormContext";
export default function () {
  var _useContext = useContext(FormContext),
    valid = _useContext.valid;
  return valid;
}