import { HashProps } from "../Hash.types";
export interface ShareHashParams {
    hash: string;
    hashToShareData?: HashProps["hashToShareData"];
}
export default function useShareHash(): ({ hash, hashToShareData }: ShareHashParams) => Promise<void>;
