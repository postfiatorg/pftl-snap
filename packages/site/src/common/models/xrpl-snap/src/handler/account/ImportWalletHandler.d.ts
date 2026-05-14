import type { Context } from '../../core/Context';
import type { IHandler } from '../IHandler';

export declare const ImportWalletMethod = 'xrpl_importWallet';
export declare class ImportWalletHandler implements IHandler<typeof ImportWalletMethod> {
  protected readonly context: Context;

  constructor(context: Context);

  handle(
    origin: string,
    params: {
      privateKey?: string;
      seed?: string;
    },
  ): Promise<{
    address: string;
  }>;
}
