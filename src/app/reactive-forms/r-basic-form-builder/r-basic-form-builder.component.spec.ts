import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBasicFormBuilderComponent } from './r-basic-form-builder.component';

describe('RBasicFormBuilderComponent', () => {
  let component: RBasicFormBuilderComponent;
  let fixture: ComponentFixture<RBasicFormBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RBasicFormBuilderComponent]
    });
    fixture = TestBed.createComponent(RBasicFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
