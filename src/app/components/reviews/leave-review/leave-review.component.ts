import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
  IconDefinition,
  faStar as faStarSolid,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../../transactions/Transaction';
import { ContractService } from 'src/app/services/contract.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.scss'],
})
export class LeaveReviewComponent implements OnInit {
  faStars: IconDefinition[];
  faStarSolid: IconDefinition;
  stars: HTMLCollection;
  transaction: Transaction = new Transaction();
  rating!: number;
  reviewTitle!: string;
  reviewText!: string;
  textCharCount: number;
  titleCharCount: number;

  constructor(
    private route: ActivatedRoute,
    private contractService: ContractService,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.faStars = Array(5).fill(faStar);
    this.stars = document.getElementsByClassName('starIcon');
    this.faStarSolid = faStarSolid;
    this.textCharCount = 0;
    this.titleCharCount = 0;
  }

  async ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      alert('Devi prima effettuare il login per lasciare una recensione');
      this.router.navigate(['/user']);
    } else {
      await this.contractService
        .getTransactionById(this.route.snapshot.params['transactionId'])
        .then((t) => (this.transaction = t))
        .catch(() => {
          alert(
            'La transazione che vuoi recensire non compare tra quelle non recensite'
          );
          this.router.navigate(['/transactions']);
        });
    }
  }

  textChange(varName: 'reviewTitle' | 'reviewText', chars: string) {
    varName == 'reviewTitle'
      ? (this.titleCharCount = chars.length)
      : (this.textCharCount = chars.length);
  }

  fillStars(index: number) {
    for (let star of this.stars) {
      this.faStars[parseInt(star.id)] =
        parseInt(star.id) > index ? faStar : faStarSolid;
    }
  }

  async addReview() {
    this.router.navigate(['/sending']);

    await this.contractService
      .addReview(
        this.transaction.id,
        this.reviewTitle,
        this.rating,
        this.reviewText
      )
      .catch((e) => {
        alert('LeaveReviewComponent.onSubmit ' + e.message);
        throw new Error(e.message);
      })
      .then(() => {
        alert(
          "La recensione è stata inviata. Controlla le notifiche di Metamask per l'esito."
        );
        this.router.navigate(['/transactions']);
      });
  }
}
