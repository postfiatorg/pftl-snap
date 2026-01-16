import { ComponentType, ReactElement } from "react";
import { CoreToastProps } from "../../Toast";
export declare function useToasterState<P extends CoreToastProps<any> = CoreToastProps<any>>(Toast: ComponentType<P>): ReactElement<P> | undefined;
