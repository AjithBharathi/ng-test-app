import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFormArray2Component } from './r-form-array2.component';

describe('RFormArray2Component', () => {
  let component: RFormArray2Component;
  let fixture: ComponentFixture<RFormArray2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RFormArray2Component]
    });
    fixture = TestBed.createComponent(RFormArray2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
