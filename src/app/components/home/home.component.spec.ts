import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let authServiceSpy: jasmine.SpyObj<AuthenticationService>;

  beforeEach(async () => {
    authServiceSpy = jasmine.createSpyObj('AuthenticationService', [
      'isLoggedIn',
    ]);

    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: AuthenticationService, useValue: authServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
