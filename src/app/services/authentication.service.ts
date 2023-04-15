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
  public account!: string;

  constructor() {
    if (this.isLoggedIn()) {
      this.account = sessionStorage.getItem('account')!;
    }
  }

  async login() {
    if (this.isInstalled()) {
      const provider = await detectEthereumProvider();
      if (provider) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        sessionStorage.setItem('account', accounts[0]);
        this.account = accounts[0];
        console.log('AuthenticationService.login - ' + this.account);
      } else {
        alert('Please install MetaMask');
      }
    } else {
      alert('Please install MetaMask');
    }
  }

  isInstalled(): boolean {
    return window.ethereum !== undefined;
  }

  isLoggedIn(): boolean {
    if (this.isInstalled()) {
      window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
        if (accounts.length <= 0) {
          console.log('AuthenticationService.isLoggedIn - logged out');
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
    } else {
      return false;
    }
  }
}
