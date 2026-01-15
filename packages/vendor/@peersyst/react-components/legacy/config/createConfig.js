import { createConfigCore } from "@peersyst/react-components-core";
import defaultConfig from "./defaultConfig";
export default function (config) {
  return createConfigCore(defaultConfig, config);
}