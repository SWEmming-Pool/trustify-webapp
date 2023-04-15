import { Injectable } from '@angular/core';
import Web3 from 'web3';
import { Transaction } from '../components/transactions/Transactions';
import { AuthenticationService } from './authentication.service';

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

  constructor(authService: AuthenticationService) {
    const Client = new Web3(Web3.givenProvider || this.INFURA_RPC);
    this.Contract = new Client.eth.Contract(
      this.CONTRACT_JSON,
      this.CONTRACT_ADDRESS
    );
    this.accountAddress = authService.account;
    //console.log('ContractService.constructor - ' + this.accountAddress);
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
    console.log('ContractService.sendTransaction - ' + this.accountAddress);

    this.Contract.methods
      .sendTransaction(receiverAddress)
      .send({ from: this.accountAddress, value: 5000000000000000 })
      .on('error', (error: any) => {
        alert(error.message);
      });
  }
}
