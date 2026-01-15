import { Dispatch, SetStateAction } from "react";
import { GridState } from "../Grids.types";
export default function (): [GridState, Dispatch<SetStateAction<GridState>>];
