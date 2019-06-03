import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeduperceListComponent } from './deduperce-list.component';

describe('DeduperceListComponent', () => {
  let component: DeduperceListComponent;
  let fixture: ComponentFixture<DeduperceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeduperceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeduperceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
