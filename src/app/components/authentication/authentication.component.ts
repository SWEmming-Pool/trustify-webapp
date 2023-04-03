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
    this.accountAddress = authenticationService.getAccountAddress();
  }
}
