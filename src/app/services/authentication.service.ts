import { Injectable } from '@angular/core';
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
declare global {
  interface Window {
    ethereum: any;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private account!: string;

  constructor() {}

  public async login() {
    const provider = await detectEthereumProvider();
    if (provider) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      this.account = accounts[0];
    } else {
      console.error('Please install MetaMask');
    }
  }

  public isLoggedIn(): boolean {
    return this.account != null && this.account !== 'undefined';
  }

  public getAccountAddress(): string {
    return this.account;
  }
}
