import { Component, OnInit } from '@angular/core';
import { Transaction } from './Transaction';
import { ContractService } from '../../services/contract.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  init = false;

  constructor(
    private contractService: ContractService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.init = false;

    if (!this.authService.isLoggedIn()) {
      alert('Devi prima effettuare il login per visualizzare le transazioni');
      this.router.navigate(['/user']);
    } else {
      this.transactions = await this.contractService.getUnreviewedTransactions(
        this.authService.account
      );

      this.init = true;
    }

    /*console.log('TransactionComponent.ngOnInit:');
    console.log(this.transactions);*/
  }
}
