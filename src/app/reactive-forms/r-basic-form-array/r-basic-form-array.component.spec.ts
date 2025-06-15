import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBasicFormArrayComponent } from './r-basic-form-array.component';

describe('RBasicFormArrayComponent', () => {
  let component: RBasicFormArrayComponent;
  let fixture: ComponentFixture<RBasicFormArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RBasicFormArrayComponent]
    });
    fixture = TestBed.createComponent(RBasicFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
