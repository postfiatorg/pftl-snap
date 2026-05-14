import type { Context } from '../../core/Context';
import type { IHandler } from '../IHandler';

export declare const SwitchWalletMethod = 'xrpl_switchWallet';
export declare class SwitchWalletHandler implements IHandler<typeof SwitchWalletMethod> {
  protected readonly context: Context;

  constructor(context: Context);

  handle(
    _origin: string,
    params: {
      address: string;
    },
  ): Promise<{
    address: string;
  }>;
}
