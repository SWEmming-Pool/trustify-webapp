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
  stars: HTMLCollection;

  constructor() {
    this.stars = document.getElementsByClassName('starIcon');
  }

  fillStars(index: number) {
    console.log(index);
    console.log(this.stars);

    for (let star of this.stars) {
      if (parseInt(star.id) <= index) {
        console.log("coloro"+star.id);
        star.setAttribute('[icon]', 'faStarSolid');
      } else {
        star.setAttribute('[icon]', 'faStar');
      }
    }
  }
}
