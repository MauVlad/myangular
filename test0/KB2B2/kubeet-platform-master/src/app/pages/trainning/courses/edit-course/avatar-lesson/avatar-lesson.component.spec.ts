import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarLessonComponent } from './avatar-lesson.component';

describe('AvatarLessonComponent', () => {
  let component: AvatarLessonComponent;
  let fixture: ComponentFixture<AvatarLessonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarLessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
