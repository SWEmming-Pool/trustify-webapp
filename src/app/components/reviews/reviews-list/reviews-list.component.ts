import { Component, Input } from '@angular/core';
import { Review } from '../Review';

@Component({
  selector: 'app-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.scss'],
})
export class ReviewsListComponent {
  @Input() reviews!: Review[];
  @Input() type!: 'sender' | 'receiver';
  @Input() address!: string;
}
