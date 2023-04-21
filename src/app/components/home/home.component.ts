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

  async sendTransaction() {
    this.router.navigate(['/sending']);

    await this.contractService
      .sendTransaction('0x36Ac550A5BD2b6a30f52901b3B63ede555F0fdF1')
      .catch((error) => {
        alert(error.message);
        throw new Error(error.message);
      })
      .then(() => {
        alert(
          "La transazione inviata è stata inviata. Controlla le notifiche di Metamask per l'esito."
        );
        this.router.navigate(['/transactions']);
      })
      .catch(() => {
        this.router.navigate(['/transactions']);
      });
  }
}
