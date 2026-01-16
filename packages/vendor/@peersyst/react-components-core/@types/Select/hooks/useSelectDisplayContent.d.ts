import { ReactElement, ReactNode } from "react";
import { CoreSelectItemProps, SelectOption } from "../Select.types";
export declare function useSelectDisplayContent<T, SIP extends CoreSelectItemProps<T> = CoreSelectItemProps<T>>(value: T | T[], multiple: boolean, options: SelectOption<T>[] | ReactElement<SIP> | ReactElement<SIP>[] | undefined, compare?: (a: T, b: T) => boolean): ReactNode | ReactNode[];
