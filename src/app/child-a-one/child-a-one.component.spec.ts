import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildAOneComponent } from './child-a-one.component';

describe('ChildAOneComponent', () => {
  let component: ChildAOneComponent;
  let fixture: ComponentFixture<ChildAOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildAOneComponent]
    });
    fixture = TestBed.createComponent(ChildAOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
