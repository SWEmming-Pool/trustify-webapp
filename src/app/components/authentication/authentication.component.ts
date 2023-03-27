import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  accountAddress: string;

  constructor(private authenticationService: AuthenticationService) {
    if (!this.authenticationService.isLoggedIn()) {
      console.log('Please log in to MetaMask');
      this.authenticationService.login();
      this.accountAddress = this.authenticationService.getAccountAddress();
      return;
    } else {
      console.log('Already logged in to MetaMask');
      this.accountAddress = this.authenticationService.getAccountAddress();
      return;
    }
  }
}
