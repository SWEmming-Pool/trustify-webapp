import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  accountAddress!: string;
  faUser = faUser;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    authenticationService.isLoggedIn()
      ? (this.accountAddress = AuthenticationService.account)
      : this.router.navigate(['/home']);
  }
}
