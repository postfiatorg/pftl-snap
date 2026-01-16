import { BaseSelectorController } from "@peersyst/react-components-core";
import { SelectorControllerProps, SelectorProps } from "./Selector.types";
import { JSXElementConstructor } from "react";
export declare const SELECTOR_CONTROLLERS: Record<BaseSelectorController, JSXElementConstructor<SelectorControllerProps>>;
declare function Selector<T>(props: SelectorProps<T>): JSX.Element;
export default Selector;
