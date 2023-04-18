import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faStar as faStarSolid,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../../transactions/Transactions';
import { ContractService } from 'src/app/services/contract.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.scss'],
})
export class LeaveReviewComponent implements OnInit, OnDestroy {
  faStar: any[];
  faStarSolid: IconDefinition;
  stars: HTMLCollection;
  private sub: any;
  transaction: Transaction = new Transaction();
  rating!: number;
  reviewTitle!: string;
  reviewText!: string;

  transactions: Transaction[] = [];
  textCharCount: number;
  titleCharCount: number;

  constructor(
    private route: ActivatedRoute,
    private contractService: ContractService,
    private authService: AuthenticationService
  ) {
    this.faStar = Array(5).fill(faStar);
    this.stars = document.getElementsByClassName('starIcon');
    this.faStarSolid = faStarSolid;
    this.textCharCount = 0;
    this.titleCharCount = 0;
  }

  async ngOnInit() {
    this.transaction = await this.contractService.findTransactionById(
      this.authService.account,
      this.route.snapshot.params['transactionId']
    );
  }

  textChange(varName: string, chars: string) {
    if (varName == 'reviewTitle') {
      this.titleCharCount = chars.length;
    } else if (varName == 'reviewText') {
      this.textCharCount = chars.length;
    }
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
    console.log('LeaveReviewComponent.onSubmit:');
    console.log(this.transaction.id);
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
