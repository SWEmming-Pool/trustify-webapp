import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionListItemComponent } from './components/transactions/transaction-list-item/transaction-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewListItemComponent } from './components/reviews/review-list-item/review-list-item.component';
import { ReviewTransactionComponent } from './components/review-transaction/review-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TransactionsComponent,
    TransactionListItemComponent,
    AuthenticationComponent,
    HomeComponent,
    ReviewsComponent,
    ReviewListItemComponent,
    ReviewTransactionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
