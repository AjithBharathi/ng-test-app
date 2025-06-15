import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteTwoComponent } from './route-two.component';

describe('RouteTwoComponent', () => {
  let component: RouteTwoComponent;
  let fixture: ComponentFixture<RouteTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteTwoComponent]
    });
    fixture = TestBed.createComponent(RouteTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
