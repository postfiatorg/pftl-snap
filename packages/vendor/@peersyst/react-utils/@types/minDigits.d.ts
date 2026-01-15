export interface MinDigitsOptions {
    fill?: "left" | "right";
}
export default function (n: number | string, d: number, { fill }?: MinDigitsOptions): string;
