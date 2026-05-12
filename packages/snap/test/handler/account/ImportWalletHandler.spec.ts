import { InvalidParamsError, UserRejectedRequestError } from '@metamask/snaps-sdk';

import { ImportWalletHandler } from '../../../src/handler/account/ImportWalletHandler';
import { Wallet } from '../../../src/core/Wallet';
import { ImportWalletDialog } from '../../../src/dialog/account/ImportWalletDialog';
import { StateManagerMock } from '../../__mocks__/core/StateManager.mock';
import { ProviderMock } from '../../__mocks__/core/Provider.mock';

jest.mock('../../../src/core/Context', () => ({
  Context: class {
    static async init() {
      const stateManager = new StateManagerMock();
      const provider = new ProviderMock();
      const wallet = await Wallet.derive(0);
      return { stateManager, provider, wallet };
    }
  },
}));

describe('ImportWalletHandler', () => {
  let handler: ImportWalletHandler;

  beforeEach(() => {
    handler = new ImportWalletHandler({} as any);
    jest.clearAllMocks();
  });

  describe('handle', () => {
    test('should reject missing mnemonic', async () => {
      await expect(handler.handle('test.origin', { mnemonic: '' })).rejects.toThrow(InvalidParamsError);
    });

    test('should reject invalid mnemonic (too few words)', async () => {
      await expect(handler.handle('test.origin', { mnemonic: 'word1 word2 word3' })).rejects.toThrow(InvalidParamsError);
    });

    test('should reject invalid mnemonic (too many words)', async () => {
      const tooMany = Array.from({ length: 25 }, () => 'word').join(' ');
      await expect(handler.handle('test.origin', { mnemonic: tooMany })).rejects.toThrow(InvalidParamsError);
    });
  });
});
