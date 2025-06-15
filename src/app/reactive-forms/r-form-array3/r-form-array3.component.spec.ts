import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFormArray3Component } from './r-form-array3.component';

describe('RFormArray3Component', () => {
  let component: RFormArray3Component;
  let fixture: ComponentFixture<RFormArray3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RFormArray3Component]
    });
    fixture = TestBed.createComponent(RFormArray3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
