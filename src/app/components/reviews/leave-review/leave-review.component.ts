import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { TRANSACTIONS, Transaction } from '../../transactions/Transactions';
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
  rating!: number;
  private sub: any;
  transaction: Transaction | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.stars = document.getElementsByClassName('starIcon');
    this.rating = 0;
    this.sub = this.route.params.subscribe((params) => {
      this.transaction = TRANSACTIONS.find(
        (transaction: { id: any }) => transaction.id === params['transactionId']
      );
    });
  }

  setRating(index: number) {
    for (let star of this.stars) {
      if (parseInt(star.id) > index) {
        this.faStar[parseInt(star.id)] = faStar;
      } else {
        this.faStar[parseInt(star.id)] = faStarSolid;
      }
    }

    this.rating = index + 1;
    console.log(this.rating);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
