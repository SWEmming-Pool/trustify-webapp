import { Injectable } from '@angular/core';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private web3: Web3 = new Web3();
  private account!: string;

  constructor() {}

  public login() {
    if (typeof window.ethereum !== 'undefined') {
      window.ethereum
        .enable()
        .then(() => {
          this.web3 = new Web3(window.ethereum);
          this.getAccount();
        })
        .catch((error: any) => {
          console.error(error);
        });
    } else {
      console.error('Please install MetaMask');
    }
  }

  private getAccount() {
    this.web3.eth.getAccounts((err, accounts) => {
      if (err != null) {
        console.error('An error occurred: ', err);
      } else if (accounts.length === 0) {
        console.error('User is not logged in to MetaMask');
      } else {
        this.account = accounts[0];
        console.log(this.account);
      }
    });
  }

  public isLoggedIn(): boolean {
    return window.ethereum.isConnected();
  }

  public getAccountAddress(): string {
    return this.account;
  }
}
