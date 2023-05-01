import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Transaction } from '../components/transactions/Transaction';
import { AuthenticationService } from './authentication.service';
import { Review } from '../components/reviews/Review';

@Injectable({
  providedIn: 'root',
})
export class ContractService {
  static INFURA_RPC: string;
  static CONTRACT_ADDRESS: string;
  static CONTRACT_JSON: any;
  static Contract: any;
  static Client: Web3;

  static {
    console.log('ContractService static constructor');

    this.INFURA_RPC =
      'https://sepolia.infura.io/v3/2309bf77660544a0b78cef8a85d33a1f';
    this.CONTRACT_ADDRESS = '0x748E332b507968EdBfFE429F95BBF7D621a9a835';
    this.CONTRACT_JSON = require('../../assets/ReviewSystem.json');
    this.Client = new Web3(Web3.givenProvider || this.INFURA_RPC);

    this.Contract = new this.Client.eth.Contract(
      this.CONTRACT_JSON,
      this.CONTRACT_ADDRESS
    );
  }

  static async getUnreviewedTransactions(
    address: string
  ): Promise<Transaction[]> {
    let unreviewed: Transaction[] = [];

    await ContractService.Contract.methods
      .getUnreviewedTransactions(address)
      .call((error: any, result: any) => {
        if (error && error.message !== 'header not found') {
          alert(error.message);
          throw new Error(error.message);
        } else {
          result.forEach((transaction: any) => {
            console.log(typeof (transaction));
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

  static async getTransactionById(id: string): Promise<Transaction> {
    let transaction: Transaction = new Transaction('', 0, 0, '', '');

    await ContractService.Contract.methods
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

  static async sendTransaction(receiverAddress: string, amount: number) {
    await ContractService.Contract.methods
      .sendTransaction(receiverAddress)
      .send({
        from: AuthenticationService.account,
        value: Web3.utils.toWei(amount.toString(), 'ether'),
      });
  }

  static async addReview(
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
      await ContractService.Contract.methods
        .addReview(transactionId, reviewTitle, rating, reviewText)
        .send({ from: AuthenticationService.account })
        .on('error', (error: any) => {
          alert(error.message);
        });
    }
  }

  static async getReviewsByAddress(
    type: 'sender' | 'receiver',
    address: string
  ): Promise<Review[]> {
    let reviews: Review[] = [];

    if (type == 'sender') {
      await ContractService.Contract.methods
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
                  review.transactionId
                )
              );
            });
          }
        });
    } else {
      await ContractService.Contract.methods
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
                  review.transactionId
                )
              );
            });
          }
        });
    }
    return reviews;
  }
}
