import type { Component } from '@metamask/snaps-sdk';
import { copyable, divider, heading, panel, text } from '@metamask/snaps-sdk';

import { translate } from '../locale/translate';
import { Label } from './TransactionComponents/base/base';
import { convertHexToString, isHex } from './TransactionComponents/utils/hex';

const stripHexPrefix = (value: string): string => {
  if (value.startsWith('0x') || value.startsWith('0X')) {
    return value.slice(2);
  }
  return value;
};

const containsControlCharacters = (value: string): boolean => {
  for (let i = 0; i < value.length; i += 1) {
    const codePoint = value.charCodeAt(i);
    if ((codePoint >= 0 && codePoint <= 8) || codePoint === 11 || codePoint === 12) {
      return true;
    }
    if ((codePoint >= 14 && codePoint <= 31) || codePoint === 127) {
      return true;
    }
  }
  return false;
};

const decodeHexMessage = (message: string): { decoded: string; hexMessage: string } | null => {
  const normalizedHex = stripHexPrefix(message);
  if (!normalizedHex || normalizedHex.length % 2 !== 0 || !isHex(normalizedHex)) {
    return null;
  }

  try {
    const decoded = convertHexToString(normalizedHex);
    if (!decoded || containsControlCharacters(decoded)) {
      return null;
    }
    return { decoded, hexMessage: message };
  } catch {
    return null;
  }
};

export class SignMessageDialog {
  static buildHeader(origin: string): Component[] {
    return [heading(translate('SignMessageHeader')), text(translate('SignMessageSubHeader', { origin }))];
  }

  static buildFooter(): Component[] {
    return [text(translate('SignMessageFooter'))];
  }

  static buildBody(message: string): Component[] {
    const decodedMessage = decodeHexMessage(message);
    if (!decodedMessage) {
      return [Label('SignMessage'), copyable(message)];
    }

    return [Label('SignMessageDecoded'), copyable(decodedMessage.decoded), Label('SignMessageHex'), copyable(decodedMessage.hexMessage)];
  }

  static async prompt(origin: string, message: string): Promise<boolean> {
    const signPrompt = await snap.request({
      method: 'snap_dialog',
      params: {
        type: 'confirmation',
        content: panel([...this.buildHeader(origin), divider(), ...this.buildBody(message), divider(), ...this.buildFooter()]),
      },
    });
    return Boolean(signPrompt);
  }
}
