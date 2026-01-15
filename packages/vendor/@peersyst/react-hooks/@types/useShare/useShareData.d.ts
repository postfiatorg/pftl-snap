import { UseShareDataReturn, UseShareParams } from "./useShare.types";
export default function useShareData(shareData: ShareData | undefined, { onShare, onShareFailed }?: UseShareParams): UseShareDataReturn;
