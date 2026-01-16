/// <reference types="react" />
import { ColorInputProps } from "./ColorInput.types";
import { TextFieldProps } from "../TextField";
declare function ColorInput<TFP extends TextFieldProps = TextFieldProps>(props: ColorInputProps<TFP>): JSX.Element;
export default ColorInput;
