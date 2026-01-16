import useConfig from "./useConfig";
export default function (component) {
  return useConfig("components")[component];
}