import type { Context } from '../../core/Context';
import type { ExtractPrivateKeyMethod, ExtractPrivateKeyHandler } from './ExtractPrivateKeyHandler';
import type { GetAccountMethod, GetAccountHandler } from './GetAccountHandler';
import type { ImportWalletHandler, ImportWalletMethod } from './ImportWalletHandler';
import type { ListWalletsHandler, ListWalletsMethod } from './ListWalletsHandler';
import type { SwitchWalletHandler, SwitchWalletMethod } from './SwitchWalletHandler';

export declare type AccountMethod =
  | typeof GetAccountMethod
  | typeof ExtractPrivateKeyMethod
  | typeof ImportWalletMethod
  | typeof ListWalletsMethod
  | typeof SwitchWalletMethod;
export declare const AccountHandlerFactory: (context: Context) => {
  xrpl_getAccount: GetAccountHandler;
  xrpl_extractPrivateKey: ExtractPrivateKeyHandler;
  xrpl_importWallet: ImportWalletHandler;
  xrpl_listWallets: ListWalletsHandler;
  xrpl_switchWallet: SwitchWalletHandler;
};
