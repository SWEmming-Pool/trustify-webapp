import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { ReviewsComponent } from './components/reviews/reviews.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'auth', component: AuthenticationComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
