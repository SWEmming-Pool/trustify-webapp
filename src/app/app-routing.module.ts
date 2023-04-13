import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LeaveReviewComponent } from './components/reviews/leave-review/leave-review.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'user', component: UserComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'leave-review/:transactionId', component: LeaveReviewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
