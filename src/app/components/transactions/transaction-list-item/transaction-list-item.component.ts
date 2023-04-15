import { Component, Input } from '@angular/core';
import { Transaction } from '../Transactions';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import Web3 from 'web3';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent {
  faStar = faStar;

  @Input() transaction!: Transaction;

  constructor() {}

  timestampToDate(timestamp: string): string {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toDateString();
  }

  weiToEth(wei: string): string {
    return Web3.utils.fromWei(wei, 'ether');
  }
}
