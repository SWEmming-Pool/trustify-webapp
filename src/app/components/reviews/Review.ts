import { ContractService } from 'src/app/services/contract.service';
import { Transaction } from '../transactions/Transaction';

export class Review {
  private transaction: Transaction;
  private date: Date;
  private title: string;
  private rating: number;
  private text: string;

  constructor(
    date: number = 0,
    title: string = '',
    rating: number = 0,
    text: string = '',
    transactionId: string,
    contractService: ContractService
  ) {
    this.date = new Date(date * 1000);
    this.title = title;
    this.rating = rating;
    this.text = text;
    this.transaction = new Transaction();
    contractService.getTransactionById(transactionId).then((transaction) => {
      this.transaction = transaction;
    });
  }

  get Transaction(): Transaction {
    return this.transaction;
  }

  get Date(): Date {
    return this.date;
  }

  get Title(): string {
    return this.title;
  }

  get Rating(): number {
    return this.rating;
  }

  get Text(): string {
    return this.text;
  }
}
