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
  faStar: any[];
  faStarSolid: IconDefinition;
  stars: HTMLCollection;
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
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.faStar = Array(5).fill(faStar);
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
        .findTransactionById(
          this.authService.account,
          this.route.snapshot.params['transactionId']
        )
        .then((t) => (this.transaction = t))
        .catch(() => {
          alert(
            'La transazione che vuoi recensire non compare tra quelle non recensite'
          );
          this.router.navigate(['/transactions']);
        });
    }
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

  async onSubmit() {
    this.router.navigate(['/sending']);
    await this.contractService
      .addReview(
        this.transaction.id,
        this.reviewTitle,
        this.rating,
        this.reviewText
      )
      .catch((e) => {
        alert(e.message);
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
