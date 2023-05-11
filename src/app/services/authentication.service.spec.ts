import { TestBed } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import { from } from 'rxjs';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let mockWindow: { ethereum: any };
  let mockDetectEthereumProvider;

  beforeEach(() => {
    mockWindow = {
      ethereum: {
        request: jasmine.createSpy('request'),
        on: jasmine.createSpy('on'),
      },
    };
    mockDetectEthereumProvider = jasmine
      .createSpy('detectEthereumProvider')
      .and.returnValue(Promise.resolve(mockWindow.ethereum));

    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        { provide: Window, useValue: mockWindow },
      ],
    });
    service = TestBed.inject(AuthenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('when MetaMask is not installed', () => {
    beforeEach(() => {
      mockWindow.ethereum = undefined;
    });

    it('should return false from isLoggedIn', () => {
      expect(service.isLoggedIn).toBeFalse();
    });

    it('should show an alert when login is called', async () => {
      spyOn(window, 'alert');
      await service.login();
      expect(window.alert).toHaveBeenCalledWith('Please install MetaMask');
    });
  });
});
