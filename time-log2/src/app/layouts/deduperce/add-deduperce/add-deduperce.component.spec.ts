import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeduperceComponent } from './add-deduperce.component';

describe('AddDeduperceComponent', () => {
  let component: AddDeduperceComponent;
  let fixture: ComponentFixture<AddDeduperceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDeduperceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeduperceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
