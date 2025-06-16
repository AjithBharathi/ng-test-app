import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyGuardTwoAComponent } from './my-guard-two-a.component';

describe('MyGuardTwoAComponent', () => {
  let component: MyGuardTwoAComponent;
  let fixture: ComponentFixture<MyGuardTwoAComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyGuardTwoAComponent]
    });
    fixture = TestBed.createComponent(MyGuardTwoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
