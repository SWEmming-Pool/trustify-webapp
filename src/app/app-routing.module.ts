import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { PaymentsComponent } from './components/payments/payments.component';

const routes: Routes = [
  { path: 'payments', component: PaymentsComponent },
  { path: 'auth', component: AuthenticationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
