import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { IconDefinition, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  accountAddress: string;
  faUser: IconDefinition;

  constructor() {
    this.faUser = faUser;
    this.accountAddress = AuthenticationService.isLoggedIn
      ? AuthenticationService.account
      : 'Completa il login tramite MetaMask';
  }

  async ngOnInit() {
    if (!AuthenticationService.isLoggedIn) {
      await AuthenticationService.login();
    }
  }
}
