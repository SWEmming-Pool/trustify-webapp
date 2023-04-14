import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../../transactions/Transactions';
import { REVIEWS, Review } from '../../reviews/Reviews';

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
  review!: Review;

  constructor(private route: ActivatedRoute) {
    /*this.sub = this.route.params.subscribe((params) => {
      let searchedTransaction = TRANSACTIONS.find(
        (transaction: { id: any }) => transaction.id === params['transactionId']
      );
      if (searchedTransaction) {
        this.transaction = searchedTransaction;
      }
    });
    this.review = new Review(this.transaction);*/
  }

  ngOnInit() {
    this.stars = document.getElementsByClassName('starIcon');
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
    this.review.date = new Date();
    REVIEWS.push(this.review);
    console.log(this.review);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
