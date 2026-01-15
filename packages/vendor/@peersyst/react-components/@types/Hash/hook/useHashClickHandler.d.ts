import { HashAction } from "@peersyst/react-components-core";
import { ShareHashParams } from "./useShareHash";
export interface UseHashOnClickHandlerParams extends ShareHashParams {
    action: HashAction | undefined;
}
export default function useHashOnClickHandler({ action, hash, hashToShareData, }: UseHashOnClickHandlerParams): () => Promise<void>;
