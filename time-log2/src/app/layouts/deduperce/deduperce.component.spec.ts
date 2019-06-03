import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeduperceComponent } from './deduperce.component';

describe('DeduperceComponent', () => {
  let component: DeduperceComponent;
  let fixture: ComponentFixture<DeduperceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeduperceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeduperceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
