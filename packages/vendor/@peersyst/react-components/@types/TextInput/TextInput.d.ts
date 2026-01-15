/// <reference types="react" />
import { Children, HTMLInput, TextInputProps } from "./TextInput.types";
export default function TextInput<HTMLT extends HTMLInput>(props: TextInputProps & Children<HTMLT>): JSX.Element;
