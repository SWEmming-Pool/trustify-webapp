import { Injectable } from '@angular/core';
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
  account: string = '';

  constructor() {
    if (this.isLoggedIn) {
      this.account = localStorage.getItem('account')!;
    }
  }

  async login() {
    if (this.isInstalled) {
      const provider = await detectEthereumProvider();
      if (provider) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        localStorage.setItem('account', accounts[0]);
        this.account = accounts[0];
      } else {
        alert('Please install MetaMask');
      }
    } else {
      alert('Please install MetaMask');
    }
  }

  get isInstalled(): boolean {
    return window.ethereum !== undefined;
  }

  get isLoggedIn(): boolean {
    if (this.isInstalled) {
      window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
        if (accounts.length <= 0) {
          localStorage.removeItem('account');
          localStorage.clear();
          this.account = '';
          window.location.reload();
        } else {
          localStorage.setItem('account', accounts[0]);
          this.account = accounts[0];
          window.location.reload();
        }
      });

      return (
        (this.account != null &&
          this.account !== undefined &&
          this.account != '') ||
        (localStorage.getItem('account') != null &&
          localStorage.getItem('account') !== undefined)
      );
    } else {
      return false;
    }
  }
}
