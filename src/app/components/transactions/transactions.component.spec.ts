import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionsComponent } from './transactions.component';
import { ContractService } from '../../services/contract.service';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { Transaction } from './Transaction';
import { of } from 'rxjs';

describe('TransactionsComponent', () => {
  let component: TransactionsComponent;
  let fixture: ComponentFixture<TransactionsComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockTransaction: Transaction = new Transaction('sender', 1, 1, 'sender', 'sender');

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthenticationService', [
      'getAccount',
    ]);

    authServiceSpy.getAccount.and.returnValue('user address');

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [TransactionsComponent],
      providers: [
        { provide: AuthenticationService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TransactionsComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show alert and redirect to login page if user is not logged in', async () => {
    spyOn(window, 'alert');
    spyOnProperty(AuthenticationService, 'isLoggedIn').and.returnValue(false);

    await component.ngOnInit();

    expect(window.alert).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/user']);
  });

  it('should fetch unreviewed transactions from contract service if user is logged in', async () => {
    Object.defineProperty(AuthenticationService, 'isLoggedIn', { value: true });
    spyOn(ContractService, 'getUnreviewedTransactions').and.returnValue(
      Promise.resolve([mockTransaction])
    );

    await component.ngOnInit();

    expect(component.transactions).toEqual([mockTransaction]);
  });


});
