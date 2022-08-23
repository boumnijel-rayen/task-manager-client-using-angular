import { TestBed } from '@angular/core/testing';

import { GuardLoginUserGuard } from './guard-login-user.guard';

describe('GuardLoginUserGuard', () => {
  let guard: GuardLoginUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardLoginUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
