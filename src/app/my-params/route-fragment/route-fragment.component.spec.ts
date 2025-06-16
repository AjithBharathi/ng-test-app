import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteFragmentComponent } from './route-fragment.component';

describe('RouteFragmentComponent', () => {
  let component: RouteFragmentComponent;
  let fixture: ComponentFixture<RouteFragmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouteFragmentComponent]
    });
    fixture = TestBed.createComponent(RouteFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
