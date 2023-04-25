import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticationService } from '../../services/authentication.service';
import { UserComponent } from './user.component';
import { Router } from '@angular/router';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let authenticationService: AuthenticationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        AuthenticationService,
        Router
      ],
      imports: [FontAwesomeModule, RouterTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    // Reset the testing module before each test
    TestBed.resetTestingModule();

    // Re-configure the testing module for the current test
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      providers: [
        AuthenticationService,
        Router
      ],
      imports: [FontAwesomeModule, RouterTestingModule]
    });

    // Create the component fixture
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    // Destroy the component fixture after each test
    fixture.destroy();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should navigate to home if not logged in', () => {
    // Create a spy for the AuthenticationService isLoggedIn method
    const authServiceSpy = spyOn(TestBed.inject(AuthenticationService), 'isLoggedIn').and.returnValue(false);

    // Create a spy for the Router navigate method
    const routerSpy = spyOn(TestBed.inject(Router), 'navigate');

    // Create the component
    const fixture = TestBed.createComponent(UserComponent);
    const component = fixture.componentInstance;

    // Call ngOnInit to trigger the navigation
    component.ngOnInit();

    // Expect that the isLoggedIn method was called
    expect(authServiceSpy).toHaveBeenCalled();

    // Expect that the Router navigate method was called with the expected route
    expect(routerSpy).toHaveBeenCalledWith(['/home']);
  });


});
