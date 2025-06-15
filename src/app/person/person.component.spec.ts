import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonComponent } from './person.component';
import { OrderService } from '../order.service';
import { Store } from '@ngrx/store';
import { EventEmitter } from '@angular/core';
import { increment, decrement, reset, ownVal } from '../state/count-store';

describe('PersonComponent', () => {
  let component: PersonComponent;
  let fixture: ComponentFixture<PersonComponent>;
  let mockOrderService: any;
  let mockStore: any;

  beforeEach(() => {
    mockOrderService = {
      name: new EventEmitter<string>(),
      email: new EventEmitter<string>(),
      password: new EventEmitter<string>(),
      hobbies: new EventEmitter<string>(),
    };

    mockStore = {
      dispatch: jasmine.createSpy('dispatch')
    };

    TestBed.configureTestingModule({
      declarations: [PersonComponent],
      providers: [
        { provide: OrderService, useValue: mockOrderService },
        { provide: Store, useValue: mockStore }
      ]
    });
    fixture = TestBed.createComponent(PersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit name on captureName', () => {
    spyOn(mockOrderService.name, 'emit');
    const event = { target: { value: 'John' } };
    component.captureName(event);
    expect(mockOrderService.name.emit).toHaveBeenCalledWith('John');
  });

  it('should emit email on captureEmail', () => {
    spyOn(mockOrderService.email, 'emit');
    const event = { target: { value: 'john@example.com' } };
    component.captureEmail(event);
    expect(mockOrderService.email.emit).toHaveBeenCalledWith('john@example.com');
  });

  it('should emit password on capturePassword', () => {
    spyOn(mockOrderService.password, 'emit');
    const event = { target: { value: 'secret' } };
    component.capturePassword(event);
    expect(mockOrderService.password.emit).toHaveBeenCalledWith('secret');
  });

  it('should emit hobby on captureHobby', () => {
    spyOn(mockOrderService.hobbies, 'emit');
    const event = { target: { value: 'reading' } };
    component.captureHobby(event);
    expect(mockOrderService.hobbies.emit).toHaveBeenCalledWith('reading');
  });

  it('should dispatch increment action on addAction', () => {
    component.addAction();
    expect(mockStore.dispatch).toHaveBeenCalledWith(increment());
  });

  it('should dispatch decrement action on lessAction', () => {
    component.lessAction();
    expect(mockStore.dispatch).toHaveBeenCalledWith(decrement());
  });

  it('should dispatch reset action on resetAction', () => {
    component.resetAction();
    expect(mockStore.dispatch).toHaveBeenCalledWith(reset());
  });

  it('should dispatch ownVal action with correct value on ownAction', () => {
    const event = { target: { value: 42 } };
    component.ownAction(event);
    expect(mockStore.dispatch).toHaveBeenCalledWith(ownVal({ value: 42 }));
  });
});


