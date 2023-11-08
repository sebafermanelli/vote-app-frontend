import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { studentauthGuard } from './studentauth.guard';

describe('studentauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => studentauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
