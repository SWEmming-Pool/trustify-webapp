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
  public static account: string;

  constructor() {
    console.log('Costruito authentication service');
  }

  public async login() {
    const provider = await detectEthereumProvider();
    if (provider) {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      AuthenticationService.account = accounts[0];
    } else {
      console.error('Please install MetaMask');
    }
  }

  public isLoggedIn(): boolean {
    return (
      AuthenticationService.account != null &&
      AuthenticationService.account !== 'undefined'
    );
  }
}
