import { Component, Input } from '@angular/core';
import { Transaction } from '../Transaction';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent {
  faStar = faStar;

  @Input() transaction!: Transaction;

  constructor() {}
}
