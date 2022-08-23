import { TestBed } from '@angular/core/testing';

import { GuardUserGuard } from './guard-user.guard';

describe('GuardUserGuard', () => {
  let guard: GuardUserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardUserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
