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

  constructor(private authenticationService: AuthenticationService) {
    this.faUser = faUser;
    this.accountAddress = authenticationService.isLoggedIn()
      ? this.authenticationService.account
      : 'Completa il login tramite MetaMask';
  }

  async ngOnInit() {
    if (!this.authenticationService.isLoggedIn()) {
      await this.authenticationService.login();
    }
  }
}
