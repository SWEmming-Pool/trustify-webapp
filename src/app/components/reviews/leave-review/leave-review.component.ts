import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../../transactions/Transactions';
import { ContractService } from 'src/app/services/contract.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import Web3 from 'web3';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.scss'],
})
export class LeaveReviewComponent implements OnInit, OnDestroy {
  faStar = Array(5).fill(faStar);
  faStarSolid = faStarSolid;
  stars!: HTMLCollection;
  private sub: any;
  transaction!: Transaction;
  transactions!: Transaction[];
  rating!: number;
  reviewTitle!: string;
  reviewText!: string;

  constructor(
    private route: ActivatedRoute,
    private contractService: ContractService,
    private authService: AuthenticationService
  ) {}

  async ngOnInit() {
    this.stars = document.getElementsByClassName('starIcon');

    this.transactions = await this.contractService.getUnreviewedTransactions(
      this.authService.account
    );

    this.sub = this.route.params.subscribe((params) => {
      let searchedTransaction = this.transactions.find(
        (transaction: { id: any }) => transaction.id === params['transactionId']
      );
      if (searchedTransaction) {
        this.transaction = searchedTransaction;
      }
    });
    console.log(this.transaction);
  }

  fillStars(index: number) {
    for (let star of this.stars) {
      if (parseInt(star.id) > index) {
        this.faStar[parseInt(star.id)] = faStar;
      } else {
        this.faStar[parseInt(star.id)] = faStarSolid;
      }
    }
  }

  onSubmit() {
    this.contractService.addReview(
      this.transaction.id,
      this.reviewTitle,
      this.rating,
      this.reviewText
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
