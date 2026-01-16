import { ComponentsConfig } from "../config.types";
export default function <K extends keyof ComponentsConfig, P>(component: K, props: P): P;
