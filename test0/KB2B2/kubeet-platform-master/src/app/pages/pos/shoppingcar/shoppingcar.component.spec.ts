import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ShoppingCarComponent } from './shoppingcar.component';

describe('ContactComponent', () => {
  let component: ShoppingCarComponent;
  let fixture: ComponentFixture<ShoppingCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
