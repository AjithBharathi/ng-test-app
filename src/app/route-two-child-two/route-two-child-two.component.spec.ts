import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTwoChildTwoComponent } from './route-two-child-two.component';

describe('RouteTwoChildTwoComponent', () => {
  let component: RouteTwoChildTwoComponent;
  let fixture: ComponentFixture<RouteTwoChildTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteTwoChildTwoComponent]
    });
    fixture = TestBed.createComponent(RouteTwoChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
