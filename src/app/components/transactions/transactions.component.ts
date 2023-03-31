import { Component } from '@angular/core';
import { transaction, TRANSACTIONS} from './Transactions';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent {
  transactions: transaction[] = TRANSACTIONS;

}
