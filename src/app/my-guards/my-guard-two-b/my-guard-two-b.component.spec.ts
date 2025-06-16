import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGuardTwoBComponent } from './my-guard-two-b.component';

describe('MyGuardTwoBComponent', () => {
  let component: MyGuardTwoBComponent;
  let fixture: ComponentFixture<MyGuardTwoBComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyGuardTwoBComponent]
    });
    fixture = TestBed.createComponent(MyGuardTwoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
