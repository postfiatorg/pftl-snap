/// <reference types="react" />
import { SelectProps } from "./Select.types";
export default function Select<T = any, Multiple extends boolean = false>(props: SelectProps<T, Multiple>): JSX.Element;
