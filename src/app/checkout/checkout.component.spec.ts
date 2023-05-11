import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { ActivatedRoute, Router } from '@angular/router';

/*describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent]
    })
      .compileComponents();
    let routerSpy: jasmine.SpyObj<Router>;
    let activatedRouteSpy: jasmine.SpyObj<ActivatedRoute>;
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: { params: { price: '10', seller: 'John' } },
    });
    component = new CheckoutComponent(routerSpy, activatedRouteSpy);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});*/
