import { Themes } from "../config.types";
import { Theme } from "../../theme";
export default function (theme: keyof Themes): Theme;
