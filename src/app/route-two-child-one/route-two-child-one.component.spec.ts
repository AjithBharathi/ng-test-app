import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTwoChildOneComponent } from './route-two-child-one.component';

describe('RouteTwoChildOneComponent', () => {
  let component: RouteTwoChildOneComponent;
  let fixture: ComponentFixture<RouteTwoChildOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteTwoChildOneComponent]
    });
    fixture = TestBed.createComponent(RouteTwoChildOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
