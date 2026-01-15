import { ComponentsConfig } from "../config.types";
export default function <Key extends keyof ComponentsConfig>(component: Key): ComponentsConfig[Key];
