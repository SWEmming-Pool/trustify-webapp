import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    protected authService: AuthenticationService,
    private router: Router
  ) {}

  async login() {
    if (!this.authService.isLoggedIn()) {
      await this.authService
        .login()
        .then(() => {
          this.router.navigate(['/user']);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      this.router.navigate(['/user']);
    }
  }
}
