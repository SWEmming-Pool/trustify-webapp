import { TestBed } from '@angular/core/testing';
import detectEthereumProvider from '@metamask/detect-provider';
import { AuthenticationService } from './authentication.service';

declare global {
  interface Window {
    ethereum: any;
  }
}

/*describe('AuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationService = TestBed.inject(AuthenticationService);
    expect(service).toBeTruthy();
  });

  it('should have isInstalled property return true if ethereum is available', () => {
    Object.defineProperty(window, 'ethereum', {
      value: {},
      writable: true
    });
    expect(AuthenticationService.isInstalled).toEqual(true);
  });

  it('should have isInstalled property return false if ethereum is not available', () => {
    Object.defineProperty(window, 'ethereum', {
      value: undefined,
      writable: true
    });

    expect(AuthenticationService.isInstalled).toEqual(false);
  });


  it('should have isLoggedIn property return false if isInstalled is false', () => {
    spyOnProperty(AuthenticationService, 'isInstalled', 'get').and.returnValue(false);
    expect(AuthenticationService.isLoggedIn).toEqual(false);
  });

  it('should have isLoggedIn property return true if account is set in localStorage', () => {
    const testAccount = 'test-account';

    window.ethereum = {
      on: () => { },
    };

    spyOnProperty(AuthenticationService, 'isInstalled', 'get').and.returnValue(true);
    spyOn(localStorage, 'getItem').and.returnValue(testAccount);
    expect(AuthenticationService.isLoggedIn).toEqual(true);
    expect(localStorage.getItem).toHaveBeenCalledWith('account');
    expect(AuthenticationService.account).toEqual(testAccount);

    window.ethereum = undefined;
  });



  it('should display an alert if MetaMask is not installed when login is called', async () => {
    const alertSpy = spyOn(window, 'alert');
    spyOnProperty(AuthenticationService, 'isInstalled', 'get').and.returnValue(false);
    await AuthenticationService.login();
    expect(alertSpy).toHaveBeenCalledWith('Please install MetaMask');
  });
});*/
