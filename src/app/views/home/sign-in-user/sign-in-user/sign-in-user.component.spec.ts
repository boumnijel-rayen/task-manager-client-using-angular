import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInUserComponent } from './sign-in-user.component';

describe('SignInUserComponent', () => {
  let component: SignInUserComponent;
  let fixture: ComponentFixture<SignInUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
