import { Component, OnInit } from '@angular/core';
import { Transaction } from './Transactions';
import { ContractService } from '../../services/contract.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss'],
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(
    private contractService: ContractService,
    private authService: AuthenticationService
  ) {}

  async ngOnInit() {
    this.transactions = await this.contractService.getUnreviewedTransactions(
      this.authService.account
    );

    /*console.log('TransactionComponent.ngOnInit:');
    console.log(this.transactions);*/
  }
}
