import { Component } from '@angular/core';
import { Payment, PAYMENTS} from './Payments';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent {
  payments: Payment[] = PAYMENTS;

}
