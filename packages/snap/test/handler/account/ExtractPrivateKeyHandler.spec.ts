import { UnauthorizedError, UserRejectedRequestError } from '@metamask/snaps-sdk';

import { ExtractPrivateKeyDialog } from '../../../src/dialog/account/ExtractPrivateKeyDialog';
import { ExtractPrivateKeyRequestDialog } from '../../../src/dialog/account/ExtractPrivateKeyRequestDialog';
import { ExtractPrivateKeyHandler, isTrustedPrivateKeyExportOrigin } from '../../../src/handler/account/ExtractPrivateKeyHandler';
import { WalletMock } from '../../__mocks__/core/Wallet.mock';

describe('ExtractPrivateKeyHandler', () => {
  let handler: ExtractPrivateKeyHandler;
  const walletMock = new WalletMock();
  const mockedContext = { wallet: walletMock };
  const trustedOrigin = 'https://wallet.postfiat.org';

  beforeEach(() => {
    jest.restoreAllMocks();
    handler = new ExtractPrivateKeyHandler(mockedContext as any);
    jest.clearAllMocks();
  });

  test('should return an empty object when the request is accepted', async () => {
    const mockedExtractPrivateKeyRequestDialog = jest.fn().mockResolvedValue(true);
    jest.spyOn(ExtractPrivateKeyRequestDialog, 'prompt').mockImplementation(mockedExtractPrivateKeyRequestDialog);

    const mockedExtractPrivateKeyDialog = jest.fn().mockResolvedValue(undefined);
    jest.spyOn(ExtractPrivateKeyDialog, 'prompt').mockImplementation(mockedExtractPrivateKeyDialog);

    const result = await handler.handle(trustedOrigin);

    expect(result).toEqual({});

    expect(mockedExtractPrivateKeyDialog).toHaveBeenCalledWith(walletMock.privateKey);
    expect(mockedExtractPrivateKeyDialog).toHaveBeenCalledTimes(1);
    expect(mockedExtractPrivateKeyRequestDialog).toHaveBeenCalledTimes(1);
  });

  test('should throw UserRejectedRequestError when the request is rejected', async () => {
    const mockedExtractPrivateKeyRequestDialog = jest.fn().mockResolvedValue(false);
    jest.spyOn(ExtractPrivateKeyRequestDialog, 'prompt').mockImplementation(mockedExtractPrivateKeyRequestDialog);

    await expect(handler.handle(trustedOrigin)).rejects.toThrow(UserRejectedRequestError);

    expect(mockedExtractPrivateKeyRequestDialog).toHaveBeenCalledTimes(1);
  });

  test('should reject untrusted origins before showing export dialogs', async () => {
    const mockedExtractPrivateKeyRequestDialog = jest.fn().mockResolvedValue(true);
    jest.spyOn(ExtractPrivateKeyRequestDialog, 'prompt').mockImplementation(mockedExtractPrivateKeyRequestDialog);

    const mockedExtractPrivateKeyDialog = jest.fn().mockResolvedValue(undefined);
    jest.spyOn(ExtractPrivateKeyDialog, 'prompt').mockImplementation(mockedExtractPrivateKeyDialog);

    await expect(handler.handle('https://random-dapp.example')).rejects.toThrow(UnauthorizedError);

    expect(mockedExtractPrivateKeyRequestDialog).not.toHaveBeenCalled();
    expect(mockedExtractPrivateKeyDialog).not.toHaveBeenCalled();
  });

  test.each([
    'https://postfiat.org',
    'https://wallet.postfiat.org',
    'https://tasknode.postfiat.org',
    'http://localhost:3000',
    'https://localhost:3000',
    'http://127.0.0.1:3000',
    'http://[::1]:3000',
  ])('should trust private key export origin %s', (origin) => {
    expect(isTrustedPrivateKeyExportOrigin(origin)).toBe(true);
  });

  test.each([
    'http://postfiat.org',
    'https://postfiat.org.evil.com',
    'https://evilpostfiat.org',
    'https://random-dapp.example',
    'ftp://postfiat.org',
    'not-a-url',
  ])('should reject private key export origin %s', (origin) => {
    expect(isTrustedPrivateKeyExportOrigin(origin)).toBe(false);
  });
});
