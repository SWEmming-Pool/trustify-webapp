import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

/*describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [AuthenticationService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return false for isLoggedIn initially', () => {
    expect(component.isLoggedIn).toBeFalse();
  });

  it('should return true for isLoggedIn if AuthenticationService.isLoggedIn is true', () => {
    spyOnProperty(AuthenticationService, 'isLoggedIn', 'get').and.returnValue(true);
    expect(component.isLoggedIn).toBeTrue();
  });

  it('should return false for isLoggedIn if AuthenticationService.isLoggedIn is false', () => {
    spyOnProperty(AuthenticationService, 'isLoggedIn', 'get').and.returnValue(false);
    expect(component.isLoggedIn).toBeFalse();
  });
});*/
