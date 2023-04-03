import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  accountAddress: string;
  faUser = faUser;

  constructor(private authenticationService: AuthenticationService) {
    this.accountAddress = authenticationService.getAccountAddress();
  }
}
