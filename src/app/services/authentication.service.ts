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
  public account!: string;

  constructor() {
    console.log('Costruito authentication service');
  }

  public async login() {
    const provider = await detectEthereumProvider();
    if (provider) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      this.account = accounts[0];
      sessionStorage.setItem('account', this.account);
    } else {
      console.error('Please install MetaMask');
    }
  }

  public isLoggedIn(): boolean {
    window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
      if (accounts.length <= 0) {
        console.log('logged out');
        this.account = '';
        sessionStorage.removeItem('account');
      }
    });

    return (
      (this.account != null &&
        this.account !== undefined &&
        this.account != '') ||
      (sessionStorage.getItem('account') != null &&
        sessionStorage.getItem('account') !== undefined)
    );
  }
}
