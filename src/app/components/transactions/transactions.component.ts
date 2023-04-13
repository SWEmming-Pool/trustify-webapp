import { Component } from '@angular/core';
import { Transaction, TRANSACTIONS} from './Transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactions: Transaction[] = TRANSACTIONS;

}
