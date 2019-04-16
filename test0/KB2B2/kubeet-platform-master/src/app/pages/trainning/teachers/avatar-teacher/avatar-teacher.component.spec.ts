import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarTeacherComponent } from './avatar-teacher.component';

describe('AvatarTeacherComponent', () => {
  let component: AvatarTeacherComponent;
  let fixture: ComponentFixture<AvatarTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
