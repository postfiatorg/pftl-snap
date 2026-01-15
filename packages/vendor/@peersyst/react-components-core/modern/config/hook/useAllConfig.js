import { useContext } from "react";
import { ConfigContext } from "../ConfigContext";
export default function () {
  return useContext(ConfigContext);
}