import { text } from '@metamask/snaps-sdk';

import { translate } from '../../../src/dialog/locale/translate';
import { TransactionDialog } from '../../../src/dialog/transaction/TransactionDialog';
import txs from '../../fixtures/tx';

const LEGACY_REVIEW_URL = 'https://wallet.xrplevm.org/review-tx';
const MISSING_POST_FIAT_REVIEW_URL = 'https://postfiat.org/review-tx';

describe('TransactionDialog', () => {
  describe('BuildFooter', () => {
    test('Builds the transaction footer without an external review link', () => {
      const result = TransactionDialog.buildFooter(txs.Payment);

      expect(result).toEqual([text(translate('TransactionFooter'))]);
      expect(JSON.stringify(result)).not.toContain(LEGACY_REVIEW_URL);
      expect(JSON.stringify(result)).not.toContain(MISSING_POST_FIAT_REVIEW_URL);
    });
  });
});
