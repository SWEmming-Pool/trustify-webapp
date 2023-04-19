import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TransactionListItemComponent } from './components/transactions/transaction-list-item/transaction-list-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewListItemComponent } from './components/reviews/review-list-item/review-list-item.component';
import { LeaveReviewComponent } from './components/reviews/leave-review/leave-review.component';
import { FormsModule } from '@angular/forms';
import { SendingComponent } from './components/sending/sending.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TransactionsComponent,
    TransactionListItemComponent,
    UserComponent,
    HomeComponent,
    ReviewsComponent,
    ReviewListItemComponent,
    LeaveReviewComponent,
    SendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
