import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Transaction } from '../components/transactions/Transactions';

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
  accountAddress: string | undefined;

  constructor() {
    const Client = new Web3(Web3.givenProvider || this.INFURA_RPC);
    this.Contract = new Client.eth.Contract(
      this.CONTRACT_JSON,
      this.CONTRACT_ADDRESS
    );

    console.log(this.Contract);
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
    let unreviewed: Transaction[];
    unreviewed = this.Contract.methods
      .getUnreviewedTransactions(address)
      .call();
    let unreviewedTransactions: Transaction[] = [];

    return unreviewedTransactions;
  }

  sendTransaction(receiverAddress: string) {
    //this.Contract.methods.sendTransaction(receiverAddress).call();

    this.Contract.methods
      .sendTransaction(receiverAddress)
      .send({ from: sessionStorage.getItem('account'), value: 50000000000000000 })
      .on('error', (error: any) => {
        console.log(error.message);
      });
  }
}
