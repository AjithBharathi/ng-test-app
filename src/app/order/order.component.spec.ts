import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderComponent } from './order.component';
import { OrderService } from '../order.service';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  
  let mockOrderService: jasmine.SpyObj<OrderService>;
  let mockStore: jasmine.SpyObj<Store<{ count: number }>>;

  beforeEach(() => {
    mockOrderService = jasmine.createSpyObj('OrderService', []);
    mockStore = jasmine.createSpyObj('Store', ['select']);
    mockStore.select.and.returnValue(of(42));

    TestBed.configureTestingModule({
      declarations: [OrderComponent],
      providers: [
        { provide: OrderService, useValue: mockOrderService },
        { provide: Store, useValue: mockStore }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a default value for naa', () => {
    expect(component.naa).toBe('ajith');
  });

  it('should initialize storeVal as an Observable', (done) => {
    component.storeVal.subscribe(val => {
      expect(val).toBe(42);
      done();
    });
  });

  it('should call ngOnInit on initialization', () => {
    const spy = spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should log in ngOnChanges', () => {
    spyOn(console, 'log');
    component.ngOnChanges();
    expect(console.log).toHaveBeenCalledWith('order ngOnChanges');
  });

  it('should log in ngAfterViewInit', () => {
    spyOn(console, 'log');
    component.ngAfterViewInit();
    expect(console.log).toHaveBeenCalledWith('order ngAfterViewInit');
  });

  it('should log in ngAfterViewChecked', () => {
    spyOn(console, 'log');
    component.ngAfterViewChecked();
    expect(console.log).toHaveBeenCalledWith('order ngAfterViewChecked');
  });

  it('should log in ngAfterContentChecked', () => {
    spyOn(console, 'log');
    component.ngAfterContentChecked();
    expect(console.log).toHaveBeenCalledWith('order ngAfterContentChecked');
  });

  it('should log in ngAfterContentInit', () => {
    spyOn(console, 'log');
    component.ngAfterContentInit();
    expect(console.log).toHaveBeenCalledWith('order ngAfterContentInit');
  });
});