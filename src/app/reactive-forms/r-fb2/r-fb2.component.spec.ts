import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFb2Component } from './r-fb2.component';

describe('RFb2Component', () => {
  let component: RFb2Component;
  let fixture: ComponentFixture<RFb2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RFb2Component]
    });
    fixture = TestBed.createComponent(RFb2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
