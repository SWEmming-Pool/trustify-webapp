import { Component } from '@angular/core';
import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.scss'],
})
export class LeaveReviewComponent {
  faStar = faStar;
  faStarSolid = faStarSolid;
  faUser = faUser;
}
