import { FC, PropsWithChildren, ReactNode } from "react";
import { Config } from "@peersyst/react-components-core";
interface ConfigProviderProps {
    config: Config;
    /**
     * @deprecated
     */
    storeTheme?: boolean;
    children: ReactNode;
}
declare const ConfigProvider: FC<PropsWithChildren<ConfigProviderProps>>;
export default ConfigProvider;
