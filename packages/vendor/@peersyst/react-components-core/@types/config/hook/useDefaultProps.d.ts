import { ComponentsConfig, Config } from "../config.types";
export default function <K extends keyof ComponentsConfig>(component: K): Config["components"][K]["defaultProps"];
