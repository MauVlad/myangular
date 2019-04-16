import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarCourseComponent } from './avatar-course.component';

describe('AvatarCourseComponent', () => {
  let component: AvatarCourseComponent;
  let fixture: ComponentFixture<AvatarCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
