import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBasicFormComponent } from './r-basic-form.component';

describe('RBasicFormComponent', () => {
  let component: RBasicFormComponent;
  let fixture: ComponentFixture<RBasicFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RBasicFormComponent]
    });
    fixture = TestBed.createComponent(RBasicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
