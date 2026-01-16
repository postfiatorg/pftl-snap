import { FC, PropsWithChildren } from "react";
import { Config } from "./config.types";
export declare const ConfigContext: import("react").Context<Config>;
export declare const ConfigProvider: FC<PropsWithChildren<{
    config: Config;
}>>;
export declare const ConfigConsumer: import("react").Consumer<Config>;
