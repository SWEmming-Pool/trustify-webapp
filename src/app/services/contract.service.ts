import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Transaction } from '../components/transactions/Transactions';
import { AuthenticationService } from './authentication.service';
import { Review } from '../components/reviews/Reviews';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  @Injectable({
    providedIn: 'root',
  })
  INFURA_RPC: string =
    'https://sepolia.infura.io/v3/2309bf77660544a0b78cef8a85d33a1f';
  CONTRACT_ADDRESS: string = '0xbE5178D3954282de18bBD23206D661F6639e7Fca';
  CONTRACT_JSON: any = require('../../assets/ReviewSystem.json');

  Contract: any;

  constructor(private authService: AuthenticationService) {
    const Client = new Web3(Web3.givenProvider || this.INFURA_RPC);
    this.Contract = new Client.eth.Contract(
      this.CONTRACT_JSON,
      this.CONTRACT_ADDRESS
    );
  }

  /*async addAddressToBook(address: string, owner: string): Promise<string> {
    let status: string = '';
    if (this.accountAddress == undefined) {
      status = 'Missing account connection';
      return status;
    }
    this.Contract.methods
      .addAddressToBook(address, owner)
      .send({ from: this.accountAddress })
      .on('error', (error: any) => {
        status = error.message;
      });
    return status;
  }*/

  async getUnreviewedTransactions(
    address: string | null
  ): Promise<Transaction[]> {
    let unreviewed: Transaction[] = [];

    await this.Contract.methods
      .getUnreviewedTransactions(address)
      .call((error: any, result: any) => {
        if (error) {
          alert(error.message);
          throw new Error(error.message);
        } else {
          result.forEach((transaction: any) => {
            unreviewed.push(
              new Transaction(
                transaction.id,
                transaction.date,
                transaction.amount,
                transaction.sender,
                transaction.receiver
              )
            );
          });
        }
      });

    return unreviewed;
  }

  async findTransactionById(
    accountAddress: string,
    id: string
  ): Promise<Transaction> {
    let transactions = await this.getUnreviewedTransactions(accountAddress);
    console.log(
      'ContractService.findTransactionById - Looking for transaction with id: ' +
        id +
        ' from account: ' +
        accountAddress
    );
    console.log(transactions);
    let transaction = transactions.find((t) => t.id == id);
    if (transaction == undefined) {
      alert('Transaction ' + id + ' not found');
      throw new Error('Transaction not found');
    }
    return transaction;
  }

  sendTransaction(receiverAddress: string) {
    console.log(
      'ContractService.sendTransaction - ' + this.authService.account
    );

    this.Contract.methods
      .sendTransaction(receiverAddress)
      .send({ from: this.authService.account, value: 5000000000000000 })
      .on('error', (error: any) => {
        alert(error.message);
      });
  }

  addReview(
    transactionId: string,
    reviewTitle: string,
    rating: number,
    reviewText: string
  ) {
    this.Contract.methods
      .addReview(transactionId, reviewTitle, rating, reviewText)
      .send({ from: this.authService.account })
      .on('error', (error: any) => {
        alert(error.message);
      });
  }

  /*async getReviewsForAddress(address: string | null): Promise<Review[]> {
    let reviews: Review[];
    reviews = this.Contract.methods
      .getReviewsForAddress(address)
      .call((error: any) => {
        if (error) {
          alert(error.message);
        }
      });

    return reviews;
  }*/

  async getReviewsForAddress(address: string | null): Promise<Review[]> {
    let reviews: Review[] = [];

    await this.Contract.methods
      .getReviewsForAddress(address)
      .call((error: any, result: any) => {
        if (error) {
          alert(error.message);
          throw new Error(error.message);
        } else {
          result.forEach((review: any) => {
            reviews.push(
              new Review(
                review.transactionId,
                review.date,
                review.title,
                review.rating,
                review.text
              )
            );
          });
        }
      });

    console.log('ContractService.getReviewsForAddress:');
    console.log(reviews);

    return reviews;
  }
}
