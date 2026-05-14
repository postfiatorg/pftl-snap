import { polling } from '@peersyst/react-utils';
import { config } from 'common/config';
import type { SendParams } from 'common/models/transaction/send.types';
import { TransactionsWithMarker, XrplTx } from 'common/models/transaction/tx.types';
import { withRetries } from 'common/query';
import type Amount from 'common/utils/Amount';
import { TransactionMeta } from 'common/utils/xrpl/meta';
import RepositoryError from 'data-access/repository/error/RepositoryError';
import RepositoryErrorCodes from 'data-access/repository/error/RepositoryErrorCodes';
import { DomainError } from 'domain/error/DomainError';
import { DomainEvents } from 'domain/events';
import { Amount as XrplAmount, Payment, SubmitResponse, Transaction, xrpToDrops } from 'xrpl';

import type { MetaMaskRepository } from '../../../data-access/repository/metamask/MetaMaskRepository';
import type { XrplService } from '../../../data-access/repository/xrpl/XrplService';
import { TransactionErrorCodes } from '../error/TransactionErrorCodes';

function stringToHex(str: string): string {
  return Buffer.from(str, 'utf8').toString('hex').toUpperCase();
}

export default class TransactionController {
  constructor(private readonly metamaskRepository: MetaMaskRepository, private readonly xrplService: XrplService) {}

  private getTransactionHashFromTxResponse(submittedTx: SubmitResponse): string {
    if (submittedTx.result.engine_result === 'tesSUCCESS') {
      return submittedTx.result.tx_json.hash!;
    }
    if (submittedTx.result.engine_result) {
      throw new RepositoryError(RepositoryErrorCodes.TRANSACTION_ERROR, {
        result: submittedTx.result.engine_result,
      });
    }
    throw new RepositoryError(RepositoryErrorCodes.TRANSACTION_ERROR);
  }

  async signAndSubmitTransaction(transaction: Transaction): Promise<string> {
    const preparedTransaction = await this.xrplService.autofillTransaction(transaction);
    const signedTransaction = await this.metamaskRepository.signPreparedTransaction(preparedTransaction);
    const submittedTransaction = await this.xrplService.submitTransaction(signedTransaction.tx_blob);

    return this.getTransactionHashFromTxResponse(submittedTransaction);
  }

  private async sendPaymentTransaction({
    amount,
    destination,
    destinationTag,
    memo,
  }: {
    destination: string;
    amount: XrplAmount;
    destinationTag?: number;
    memo?: string;
  }): Promise<string> {
    const { account } = await this.metamaskRepository.getWallet();

    const tx: Payment = {
      TransactionType: 'Payment',
      Account: account,
      Destination: destination,
      Amount: amount,
    };

    if (destinationTag !== undefined) {
      tx.DestinationTag = destinationTag;
    }

    if (memo) {
      tx.Memos = [
        {
          Memo: {
            MemoData: stringToHex(memo),
          },
        },
      ];
    }

    return this.signAndSubmitTransaction(tx);
  }

  async getAccountTransactions(address: string, marker: unknown): Promise<TransactionsWithMarker> {
    try {
      const res = await withRetries(
        async () => this.xrplService.getAccountTransactions(address, marker),
        config.retry.times,
        config.retry.delay,
      );

      const payments = res.result.transactions.reduce<XrplTx[]>((acc, { tx, meta }) => {
        // eslint-disable-next-line no-implicit-coercion
        if (tx && typeof meta === 'object' && meta.TransactionResult === 'tesSUCCESS') {
          acc.push({ ...tx, meta: new TransactionMeta(meta) });
        }

        return acc;
      }, []);

      return {
        marker: res.result.marker,
        transactions: payments,
      };
    } catch (error) {
      return {
        marker: undefined,
        transactions: [],
      };
    }
  }

  /**
   * Checks if a transaction is validated
   * @param hash - Hash of the transaction
   */
  public async isTransactionValidated(hash: string): Promise<boolean> {
    try {
      const tx = await this.xrplService.getTransaction(hash);
      const { result } = tx;
      if ('validated' in result) {
        return Boolean(result.validated);
      }
      return false;
    } catch (_) {
      return false;
    }
  }

  /**
   * Await for a transaction to be validated
   * @param hash - Hash of the transaction
   */
  public async awaitTransactionValidation(hash: string): Promise<void> {
    await polling(
      async () => this.isTransactionValidated(hash),
      (res) => !res,
      {
        maxIterations: 15,
        delay: 2000,
      },
    );
  }

  async sendXrpTransaction({ token, amount, ...rest }: SendParams): Promise<string> {
    const availableAmount: Amount = token.balance;

    if (!availableAmount.canPay(amount)) {
      throw new DomainError(TransactionErrorCodes.INSUCCICIENT_BALANCE);
    }

    return await this.sendPaymentTransaction({
      ...rest,
      amount: xrpToDrops(amount),
    });
  }

  async sendIOUTransaction({ amount, token, ...rest }: SendParams): Promise<string> {
    const availableAmount: Amount = token.balance;

    if (!availableAmount.canPay(amount)) {
      throw new DomainError(TransactionErrorCodes.INSUCCICIENT_BALANCE);
    }

    return await this.sendPaymentTransaction({
      ...rest,
      amount: {
        currency: token.currency,
        value: amount,
        issuer: token.issuer,
      },
    });
  }

  async sendTransaction(params: SendParams): Promise<string> {
    const { token } = params;
    let hash = '';

    if (token.currency === 'XRP') {
      hash = await this.sendXrpTransaction(params);
    } else {
      hash = await this.sendIOUTransaction(params);
    }

    DomainEvents.transaction.emit('onTransactionSigned');
    await this.awaitTransactionValidation(hash);

    return hash;
  }
}
