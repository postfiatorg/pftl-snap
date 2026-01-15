import { Component } from "react";
import { ReactPlayerProps } from "react-player";
interface State {
    ready: boolean;
    playing: boolean;
}
export type PlayerProps = ReactPlayerProps;
/**
 * Player from <a href="https://github.com/CookPete/react-player" target="_blank" rel="noreferrer noopener">this repo</a>
 */
export default class Player extends Component<PlayerProps, State> {
    state: State;
    render(): import("react").JSX.Element;
}
export {};
