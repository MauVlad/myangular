import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeduperceDetailComponent } from './deduperce-detail.component';

describe('DeduperceDetailComponent', () => {
  let component: DeduperceDetailComponent;
  let fixture: ComponentFixture<DeduperceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeduperceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeduperceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
