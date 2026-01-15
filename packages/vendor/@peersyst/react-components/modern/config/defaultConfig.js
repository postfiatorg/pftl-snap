import { darkTheme, defaultTheme, lightTheme } from "../theme";
import componentsConfig from "./components.config";
var defaultConfig = {
  themes: {
    "default": defaultTheme,
    light: lightTheme,
    dark: darkTheme
  },
  translate: function translate(w) {
    return w;
  },
  locale: "en",
  validators: {},
  components: componentsConfig
};
export default defaultConfig;