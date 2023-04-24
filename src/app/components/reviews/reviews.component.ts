import { Component, OnInit } from '@angular/core';
import { Review } from './Review';
import { ContractService } from 'src/app/services/contract.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];

  constructor(
    private contractService: ContractService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (!this.authService.isLoggedIn()) {
      alert('Devi prima effettuare il login per visualizzare le recensioni');
      this.router.navigate(['/user']);
    } else {
      this.reviews = await this.contractService.getReviewsForAddress(
        this.authService.account
      );
    }

    /*console.log('ReviewsComponent.ngOnInit:');
    console.log(this.reviews);*/
  }
}
