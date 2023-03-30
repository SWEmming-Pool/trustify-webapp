import { Component, Input } from '@angular/core';
import { Review } from '../Reviews';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.scss'],
})
export class ReviewListItemComponent {
  faStar = faStar;
  dateToString(date: Date): string {
    return date.toISOString().split('T')[0];
  }
  @Input() review!: Review;
}
