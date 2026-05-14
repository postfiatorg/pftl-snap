import type { Context } from '../../core/Context';
import type { IHandler } from '../IHandler';

export declare const ListWalletsMethod = 'xrpl_listWallets';
export declare type WalletInfo = {
  address: string;
  publicKey: string;
  type: 'derived' | 'imported';
  isActive: boolean;
};
export declare class ListWalletsHandler implements IHandler<typeof ListWalletsMethod> {
  protected readonly context: Context;

  constructor(context: Context);

  handle(): Promise<{
    wallets: WalletInfo[];
  }>;
}
