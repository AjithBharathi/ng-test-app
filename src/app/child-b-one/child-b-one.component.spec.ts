import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildBOneComponent } from './child-b-one.component';

describe('ChildBOneComponent', () => {
  let component: ChildBOneComponent;
  let fixture: ComponentFixture<ChildBOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildBOneComponent]
    });
    fixture = TestBed.createComponent(ChildBOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
