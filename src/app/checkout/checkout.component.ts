import { Component } from '@angular/core';
import { ContractService } from '../services/contract.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent {
  price: number = this.route.snapshot.params['price'];
  seller: string = this.route.snapshot.params['seller'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private contractService: ContractService,
    private authService: AuthenticationService
  ) {}

  async sendTransaction() {
    if (!this.authService.isLoggedIn) {
      await this.authService.login();
    }

    this.router.navigate(['/sending']);

    await this.contractService
      .sendTransaction(
        this.route.snapshot.params['seller'],
        this.route.snapshot.params['price']
      )
      .catch((error) => {
        alert('ERRORE ' + error.message);
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
