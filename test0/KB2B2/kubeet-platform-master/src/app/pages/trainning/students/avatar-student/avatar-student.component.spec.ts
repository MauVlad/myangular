import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarStudentComponent } from './avatar-student.component';

describe('AvatarStudentComponent', () => {
  let component: AvatarStudentComponent;
  let fixture: ComponentFixture<AvatarStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
