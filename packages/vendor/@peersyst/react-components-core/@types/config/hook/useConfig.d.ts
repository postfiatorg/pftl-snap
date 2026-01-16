import { Config } from "../config.types";
export default function <Key extends keyof Config>(config: Key): Config[Key];
