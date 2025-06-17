import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipesHomeComponent } from './custom-pipes-home.component';

describe('CustomPipesHomeComponent', () => {
  let component: CustomPipesHomeComponent;
  let fixture: ComponentFixture<CustomPipesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomPipesHomeComponent]
    });
    fixture = TestBed.createComponent(CustomPipesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
