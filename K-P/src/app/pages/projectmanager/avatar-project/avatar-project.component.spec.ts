import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarProjectComponent } from './avatar-project.component';

describe('AvatarProjectComponent', () => {
  let component: AvatarProjectComponent;
  let fixture: ComponentFixture<AvatarProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
