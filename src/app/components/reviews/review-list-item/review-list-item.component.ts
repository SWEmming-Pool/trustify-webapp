import { Component, Input } from '@angular/core';
import { Review } from '../Reviews';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-review-list-item',
  templateUrl: './review-list-item.component.html',
  styleUrls: ['./review-list-item.component.scss'],
})
export class ReviewListItemComponent {
  faStar = faStar;
  faUser = faUser;

  @Input() review!: Review;
}
