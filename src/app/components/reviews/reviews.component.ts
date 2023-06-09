import { Component, OnInit } from '@angular/core';
import { Review } from './Review';
import { ContractService } from 'src/app/services/contract.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  type: 'sender' | 'receiver';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contractService: ContractService,
    private authService: AuthenticationService
  ) {
    this.type = this.route.snapshot.params['type'];
  }

  async ngOnInit() {
    if (!this.authService.isLoggedIn) {
      alert('Devi prima effettuare il login per visualizzare le recensioni');
      this.router.navigate(['/user']);
    } else {
      this.reviews = await this.contractService.getReviewsByAddress(
        this.type,
        this.authService.account
      );
    }
  }
}
