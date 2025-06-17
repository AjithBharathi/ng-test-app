import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InbuiltHomeComponent } from './inbuilt-home.component';

describe('InbuiltHomeComponent', () => {
  let component: InbuiltHomeComponent;
  let fixture: ComponentFixture<InbuiltHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InbuiltHomeComponent]
    });
    fixture = TestBed.createComponent(InbuiltHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
