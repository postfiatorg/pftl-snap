import "@peersyst/react-components-core";
import { ComponentsConfig } from "./components.config.types";
declare module "@peersyst/react-components-core" {
    interface CoreConfigTypes {
        ComponentsConfig: ComponentsConfig;
    }
}
