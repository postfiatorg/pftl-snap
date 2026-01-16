import { ComponentType, PropsWithChildren } from "react";
import { ComponentsConfig } from "./config.types";
export default function <K extends keyof ComponentsConfig, P extends PropsWithChildren>(displayName: K, Component: ComponentType<P>): ComponentType<P>;
