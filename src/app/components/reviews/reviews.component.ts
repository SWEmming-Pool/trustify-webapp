import { Component } from '@angular/core';
import { Review, REVIEWS } from './Reviews';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent {
  reviews: Review[] = REVIEWS;
}
