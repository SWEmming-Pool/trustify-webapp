import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { ContractService } from 'src/app/services/contract.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private contractService: ContractService
  ) {}

  async login() {
    if (!this.authenticationService.isLoggedIn()) {
      await this.authenticationService
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

  isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  sendTransaction() {
    this.contractService.sendTransaction(
      '0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1'
    );
  }
}
