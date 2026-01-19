import { copyable, divider, heading, panel, text } from '@metamask/snaps-sdk';

import { translate } from '../../../src/dialog/locale/translate';
import { SignMessageDialog } from '../../../src/dialog/transaction/SignMessageDialog';
import { Label } from '../../../src/dialog/transaction/TransactionComponents/base/base';

describe('SignMessageDialog', () => {
  const origin = 'mockOrigin';
  const message = 'mockMessage';
  const hexMessage = '0x48656c6c6f';
  const decodedHexMessage = 'Hello';
  const headerResult = [heading(translate('SignMessageHeader')), text(translate('SignMessageSubHeader', { origin }))];
  const bodyResult = [Label('SignMessage'), copyable(message)];
  const hexBodyResult = [Label('SignMessageDecoded'), copyable(decodedHexMessage), Label('SignMessageHex'), copyable(hexMessage)];
  const footerResult = [text(translate('SignMessageFooter'))];

  describe('BuildHeader', () => {
    test('Builds header correctly', () => {
      const result = SignMessageDialog.buildHeader(origin);

      expect(result).toEqual(headerResult);
    });
  });

  describe('BuildBody', () => {
    test('Builds body correctly for plain text', () => {
      const result = SignMessageDialog.buildBody(message);

      expect(result).toEqual(bodyResult);
    });

    test('Builds body correctly for hex message', () => {
      const result = SignMessageDialog.buildBody(hexMessage);

      expect(result).toEqual(hexBodyResult);
    });
  });

  describe('BuildFooter', () => {
    test('Builds footer correctly', () => {
      const result = SignMessageDialog.buildFooter();

      expect(result).toEqual(footerResult);
    });
  });

  describe('Prompt', () => {
    test('Prompts correctly with true result', async () => {
      const mockedRequest = jest.fn().mockResolvedValue(true);
      jest.spyOn(snap, 'request').mockImplementation(mockedRequest);

      const result = await SignMessageDialog.prompt(origin, message);

      expect(mockedRequest).toHaveBeenCalledWith({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([...headerResult, divider(), ...bodyResult, divider(), ...footerResult]),
        },
      });
      expect(result).toBe(true);
    });

    test('Prompts correctly with false result', async () => {
      const mockedRequest = jest.fn().mockResolvedValue(false);
      jest.spyOn(snap, 'request').mockImplementation(mockedRequest);

      const result = await SignMessageDialog.prompt(origin, message);

      expect(mockedRequest).toHaveBeenCalledWith({
        method: 'snap_dialog',
        params: {
          type: 'confirmation',
          content: panel([...headerResult, divider(), ...bodyResult, divider(), ...footerResult]),
        },
      });
      expect(result).toBe(false);
    });
  });
});
