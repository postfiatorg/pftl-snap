import { Config } from "./config.types";
import { CreateConfig } from "./createConfig.types";
import { Loosen } from "@peersyst/react-types";
export default function createConfigCore({ theme: defaultTheme, themes: defaultThemes, translate: defaultTranslate, validators: defaultValidators, components: defaultComponents, locale: defaultLocale, ...restDefaults }: Loosen<Omit<Config, "projectName">, "theme">, { theme, themes, translate, validators, components, locale, ...extraConfig }: CreateConfig): Config;
