import { Component, Input } from '@angular/core';
import { Payment } from '../Payments';
import { faStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-payment-list-item',
  templateUrl: './payment-list-item.component.html',
  styleUrls: ['./payment-list-item.component.scss'],
})
export class PaymentListItemComponent {
  faStar = faStar;

  @Input() payment!: Payment;
}
