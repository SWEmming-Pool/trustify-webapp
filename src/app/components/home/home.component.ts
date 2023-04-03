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
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  async login() {
    await this.authenticationService.login().then(() => {
      this.router.navigate(['/auth']);
    });
  }
}
