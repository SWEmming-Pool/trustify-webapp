import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // add this line
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ContractService } from 'src/app/services/contract.service';
import { Review } from '../Review';
import { LeaveReviewComponent } from './leave-review.component';
import { Transaction } from '../../transactions/Transaction';

describe('LeaveReviewComponent', () => {
  let component: LeaveReviewComponent;
  let fixture: ComponentFixture<LeaveReviewComponent>;
  let activatedRouteMock: any;
  let routerMock: any;


  beforeEach(waitForAsync(() => {
    activatedRouteMock = {
      snapshot: {
        params: {
          transactionId: '123'
        }
      }
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      declarations: [LeaveReviewComponent],
      imports: [FormsModule, ReactiveFormsModule, FontAwesomeModule], // add this line
      providers: [
        { provide: ActivatedRoute, useValue: activatedRouteMock },
        { provide: Router, useValue: routerMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveReviewComponent);
    component = fixture.componentInstance;


    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if user is logged in and navigate to user page if not', () => {

    spyOnProperty(AuthenticationService, 'isLoggedIn').and.returnValue(false);
    component.ngOnInit();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/user']);
  });

  it('should retrieve the transaction by id and assign it to the review', async () => {

    spyOnProperty(AuthenticationService, 'isLoggedIn').and.returnValue(true);
    const transaction = new Transaction('123', 100, 50, 'sender', 'receiver');
    spyOn(ContractService, 'getTransactionById').and.returnValue(Promise.resolve(transaction));

    await component.ngOnInit();

    expect(component.review.Transaction).toEqual(transaction);
  });


  it('should navigate to transactions page if transaction retrieval fails', async () => {

    spyOnProperty(AuthenticationService, 'isLoggedIn').and.returnValue(true);
    spyOn(ContractService, 'getTransactionById').and.returnValue(Promise.reject());
    await component.ngOnInit();

    expect(routerMock.navigate).toHaveBeenCalledWith(['/transactions']);
  });

  it('should fill the stars based on the selected index', () => {
    component.fillStars(2);

    expect(component.faStars[0]).toEqual(component.faStarSolid);
    expect(component.faStars[1]).toEqual(component.faStarSolid);
    expect(component.faStars[2]).toEqual(component.faStarSolid);
    expect(component.faStars[3] !== component.faStarSolid).toBeTrue();
    expect(component.faStars[4] !== component.faStarSolid).toBeTrue();
  });

  it('should update the character count when text changes', () => {
    component.textChange('reviewTitle', 'Test title');

    expect(component.titleCharCount).toBe(10);

    component.textChange('reviewText', 'Test text');

    expect(component.textCharCount).toBe(9);
  });

});