export type Polling<R> = Promise<R> & {
    abort(): void;
};
export interface PollingOptions {
    delay?: number;
    maxIterations?: number;
    timeout?: number;
}
export default function <R>(fn: () => Promise<R>, condition: (res: R) => boolean, options?: PollingOptions): Polling<R | undefined>;
