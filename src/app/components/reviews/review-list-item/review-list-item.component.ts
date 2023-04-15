import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../Reviews';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../../transactions/Transactions';
import { ContractService } from 'src/app/services/contract.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.scss'],
})
export class ReviewListItemComponent implements OnInit {
  faStar = faStar;
  faStarSolid = faStarSolid;
  faUser = faUser;
  transactions: Transaction[] = [];
  transaction: Transaction | undefined;

  @Input() review!: Review;

  constructor(
    private contractService: ContractService,
    private authService: AuthenticationService
  ) {}

  async ngOnInit() {
    this.transactions = await this.contractService.getUnreviewedTransactions(
      this.authService.account
    );

    this.transaction = this.transactions.find(
      (transaction: { id: any }) => transaction.id === this.review.transactionId
    );
  }
}
