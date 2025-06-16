import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResolverComponent } from './my-resolver.component';

describe('MyResolverComponent', () => {
  let component: MyResolverComponent;
  let fixture: ComponentFixture<MyResolverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyResolverComponent]
    });
    fixture = TestBed.createComponent(MyResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
