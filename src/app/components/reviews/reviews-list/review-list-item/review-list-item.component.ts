import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../../Review';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faStar as faStarSolid,
} from '@fortawesome/free-solid-svg-icons';
import { Transaction } from '../../../transactions/Transaction';
import { ContractService } from 'src/app/services/contract.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.scss'],
})
export class ReviewListItemComponent implements OnInit {
  faStar: IconDefinition;
  faStarSolid: IconDefinition;
  faUser: IconDefinition;
  transaction: Transaction;
  stars: boolean[];

  @Input() review!: Review;
  @Input() type!: 'sender' | 'receiver';
  @Input() address!: string;

  constructor(private contractService: ContractService) {
    this.faStar = faStar;
    this.faStarSolid = faStarSolid;
    this.faUser = faUser;
    this.transaction = new Transaction();
    this.stars = [false, false, false, false, false];
  }

  async ngOnInit() {
    for (let i = 0; i < this.review.rating; i++) {
      this.stars[i] = true;
    }

    await this.contractService
      .getTransactionById(
        this.review.transactionId
      )
      .then((transaction) => {
        this.transaction = transaction;
      });
  }
}
