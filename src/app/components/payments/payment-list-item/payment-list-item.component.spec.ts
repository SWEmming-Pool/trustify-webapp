import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentListItemComponent } from './payment-list-item.component';

describe('PaymentListItemComponent', () => {
  let component: PaymentListItemComponent;
  let fixture: ComponentFixture<PaymentListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
