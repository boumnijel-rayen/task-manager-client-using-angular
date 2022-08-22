import { TestBed } from '@angular/core/testing';

import { GuardLoginAdminGuard } from './guard-login-admin.guard';

describe('GuardLoginAdminGuard', () => {
  let guard: GuardLoginAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardLoginAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
