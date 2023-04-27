import { ContractService } from 'src/app/services/contract.service';
import { Transaction } from '../transactions/Transaction';

export class Review {
  transaction: Transaction;
  date: Date;
  title: string;
  rating: number;
  text: string;

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
}
