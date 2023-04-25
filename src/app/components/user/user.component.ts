import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  accountAddress!: string;
  faUser = faUser;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.authenticationService.isLoggedIn()) {
      this.accountAddress = sessionStorage.getItem('account') || '';
    } else {
      this.router.navigate(['/home']);
    }
  }
}
