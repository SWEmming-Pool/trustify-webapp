import { Component, Input } from '@angular/core';
import { transaction } from '../Transactions';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent {
  faStar = faStar;

  @Input() transaction!: transaction;
}
