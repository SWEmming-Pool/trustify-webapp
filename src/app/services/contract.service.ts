import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Transaction } from '../components/transactions/Transaction';
import { AuthenticationService } from './authentication.service';
import { Review } from '../components/reviews/Review';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  INFURA_RPC: string =
    'https://sepolia.infura.io/v3/2309bf77660544a0b78cef8a85d33a1f';
  CONTRACT_ADDRESS: string = '0xF16a40c5C0dE254dFf3BFA40F4a5C99f908f9aBa';
  CONTRACT_JSON: any = require('../../assets/ReviewSystem.json');

  Contract: any;

  constructor(private authService: AuthenticationService) {
    const Client = new Web3(Web3.givenProvider || this.INFURA_RPC);
    this.Contract = new Client.eth.Contract(
      this.CONTRACT_JSON,
      this.CONTRACT_ADDRESS
    );
  }

  async getUnreviewedTransactions(address: string): Promise<Transaction[]> {
    let unreviewed: Transaction[] = [];

    await this.Contract.methods
      .getUnreviewedTransactions(address)
      .call((error: any, result: any) => {
        if (error && error.message !== 'header not found') {
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

  async getTransactionById(id: string): Promise<Transaction> {
    let transaction: Transaction = new Transaction('', 0, 0, '', '');

    await this.Contract.methods
      .getTransactionById(id)
      .call((error: any, result: any) => {
        if (error) {
          alert('Transazione non trovata.');
        } else {
          transaction = new Transaction(
            result.id,
            result.date,
            result.amount,
            result.sender,
            result.receiver
          );
        }
      });

    return transaction;
  }

  async sendTransaction(receiverAddress: string, amount: number) {
    await this.Contract.methods.sendTransaction(receiverAddress).send({
      from: this.authService.account,
      value: Web3.utils.toWei(amount.toString(), 'ether'),
    });
  }

  async addReview(
    transactionId: string,
    reviewTitle: string,
    rating: number,
    reviewText: string
  ) {
    if (
      reviewTitle.length > 50 ||
      reviewText.length > 500 ||
      rating < 1 ||
      rating > 5 ||
      reviewTitle.length == 0 ||
      reviewText.length == 0 ||
      reviewTitle == undefined ||
      reviewText == undefined
    ) {
      alert('La recensione non rispetta i vincoli di validità.');
      throw new Error('Invalid review');
    } else {
      await this.Contract.methods
        .addReview(transactionId, reviewTitle, rating, reviewText)
        .send({ from: this.authService.account })
        .on('error', (error: any) => {
          alert(error.message);
        });
    }
  }

  async getReviewsByAddress(
    type: 'sender' | 'receiver',
    address: string
  ): Promise<Review[]> {
    let reviews: Review[] = [];

    if (type == 'sender') {
      await this.Contract.methods
        .getReviewsBySender(address)
        .call((error: any, result: any) => {
          if (error && error.message !== 'header not found') {
            alert(error.message);
            throw new Error(error.message);
          } else {
            result.forEach((review: any) => {
              reviews.push(
                new Review(
                  review.date,
                  review.title,
                  review.rating,
                  review.text,
                  review.transactionId,
                  this
                )
              );
            });
          }
        });
    } else {
      await this.Contract.methods
        .getReviewsByReceiver(address)
        .call((error: any, result: any) => {
          if (error && error.message !== 'header not found') {
            alert(error.message);
            throw new Error(error.message);
          } else {
            result.forEach((review: any) => {
              reviews.push(
                new Review(
                  review.date,
                  review.title,
                  review.rating,
                  review.text,
                  review.transactionId,
                  this
                )
              );
            });
          }
        });
    }
    return reviews;
  }
}
