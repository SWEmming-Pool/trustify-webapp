import { Component, OnInit } from '@angular/core';
import { Review } from './Reviews';
import { ContractService } from 'src/app/services/contract.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor(
    private contractService: ContractService,
    private authService: AuthenticationService
  ) {}

  async ngOnInit() {
    this.reviews = await this.contractService.getReviewsForAddress(
      this.authService.account
    );

    console.log('ReviewsComponent.ngOnInit:');
    console.log(this.reviews);
  }
}
