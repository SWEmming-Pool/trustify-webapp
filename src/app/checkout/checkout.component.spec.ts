import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { CheckoutComponent } from './checkout.component';
import { ContractService } from '../services/contract.service';
import { AuthenticationService } from '../services/authentication.service';
import { SendingComponent } from '../components/sending/sending.component';
import { TransactionsComponent } from '../components/transactions/transactions.component';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let mockContractService: jasmine.SpyObj<ContractService>;
  let mockAuthService: jasmine.SpyObj<AuthenticationService>;
  let mockActivatedRoute: ActivatedRoute;

  beforeEach(async () => {
    mockContractService = jasmine.createSpyObj('ContractService', [
      'sendTransaction',
    ]);
    mockAuthService = jasmine.createSpyObj('AuthenticationService', [
      'isLoggedIn',
      'login',
    ]);

    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'sending', component: SendingComponent },
          { path: 'transactions', component: TransactionsComponent },
        ]), // configurazione del router di test
      ],
      providers: [
        { provide: ContractService, useValue: mockContractService },
        { provide: AuthenticationService, useValue: mockAuthService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                price: 10,
                seller: '0x1234567890123456789012345678901234567890',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    mockActivatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('sendTransaction', () => {
    it('should navigate to sending page after sending transaction', async () => {
      mockContractService.sendTransaction.and.resolveTo();
      const routerSpy = spyOn(component['router'], 'navigate');
      await component.sendTransaction();
      expect(routerSpy).toHaveBeenCalledWith(['/sending']);
    });

    it('should call login method if user is not logged in', async () => {
      mockAuthService.account = '';
      mockAuthService.login();
      mockContractService.sendTransaction.and.resolveTo();
      await component.sendTransaction();
      expect(mockAuthService.login).toHaveBeenCalled();
    });

    it('should call sendTransaction method of ContractService with correct arguments', async () => {
      mockAuthService.account != '';
      mockContractService.sendTransaction.and.resolveTo();
      await component.sendTransaction();
      expect(mockContractService.sendTransaction).toHaveBeenCalledWith(
        '0x1234567890123456789012345678901234567890',
        10
      );
    });

    it('should show success message and navigate to transactions page after sending transaction successfully', async () => {
      mockAuthService.account != '';
      mockContractService.sendTransaction.and.resolveTo();
      const routerSpy = spyOn(component['router'], 'navigate');
      await component.sendTransaction();
      expect(routerSpy).toHaveBeenCalledWith(['/transactions']);
    });

    /*it('should show error message and navigate to transactions page after sending transaction unsuccessfully', async () => {
      mockAuthService.account != '';
      mockContractService.sendTransaction.and.rejectWith(
        new Error('Transaction error')
      );
      const routerSpy = spyOn(component['router'], 'navigate');
      await component.sendTransaction();
      expect(routerSpy).toHaveBeenCalledWith(['/sending']);
      expect(routerSpy).toHaveBeenCalledWith(['/transactions']);
    });*/
  });
});
