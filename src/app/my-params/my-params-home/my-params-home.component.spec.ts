import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyParamsHomeComponent } from './my-params-home.component';

describe('MyParamsHomeComponent', () => {
  let component: MyParamsHomeComponent;
  let fixture: ComponentFixture<MyParamsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyParamsHomeComponent]
    });
    fixture = TestBed.createComponent(MyParamsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
