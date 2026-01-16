import { Component } from "react";
import { ErrorBoundaryProps, ErrorBoundaryState } from "./ErrorBoundary.types";
export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState;
    componentDidCatch(error: unknown, info: unknown): void;
    render(): import("react").ReactNode;
}
