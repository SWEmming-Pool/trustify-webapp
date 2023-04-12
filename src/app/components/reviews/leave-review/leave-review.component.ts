import { Component } from '@angular/core';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leave-review',
  templateUrl: './leave-review.component.html',
  styleUrls: ['./leave-review.component.scss'],
})
export class LeaveReviewComponent {
  faStar = Array(5).fill(faStar);
  faStarSolid = faStarSolid;
  stars: HTMLCollection;
  rating: number;

  constructor() {
    this.stars = document.getElementsByClassName('starIcon');
    this.rating = 0;
  }

  fillStars(index: number) {}

  setRating(index: number) {
    for (let star of this.stars) {
      if (parseInt(star.id) > index) {
        this.faStar[parseInt(star.id)] = faStar;
      } else {
        this.faStar[parseInt(star.id)] = faStarSolid;
      }
    }

    this.rating = index + 1;
    console.log(this.rating);
  }

  resetStars() {
    if (this.rating === 0) {
      for (let star of this.stars) {
        this.faStar[parseInt(star.id)] = faStar;
      }
    }
  }
}
