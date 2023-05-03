import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent implements OnInit {
  @Input() transaction!: Transaction;
  @Input() leaverev!: boolean;
  faStar = faStar;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url.includes('/leave-review')) {
          this.leaverev = true;
        } else {
          this.leaverev = false;
        }
      }
    });
  }
}
