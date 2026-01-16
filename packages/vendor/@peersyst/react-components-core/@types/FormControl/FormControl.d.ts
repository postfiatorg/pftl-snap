/// <reference types="react" />
import { FormControlProps } from "./FormControl.types";
declare function FormControl<T = any>({ name, defaultValue, value: valueProp, onChange, validation, error: errorProp, required, disabled, readonly, hideError, showValid, onValidated, onFocus, onBlur, children, }: FormControlProps<T>): JSX.Element;
export default FormControl;
