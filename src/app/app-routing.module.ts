import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LeaveReviewComponent } from './components/reviews/leave-review/leave-review.component';
import { SendingComponent } from './components/sending/sending.component';
import { SearchReviewsComponent } from './components/reviews/search-reviews/search-reviews.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'user', component: UserComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'sending', component: SendingComponent },
  { path: 'search-reviews', component: SearchReviewsComponent },
  { path: 'checkout/:seller/:price', component: CheckoutComponent },
  { path: 'leave-review/:transactionId', component: LeaveReviewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
