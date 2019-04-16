import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelogReportsComponent } from './timelog-reports.component';

describe('TimelogReportsComponent', () => {
  let component: TimelogReportsComponent;
  let fixture: ComponentFixture<TimelogReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelogReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelogReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
