import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarMemberComponent } from './avatar-member.component';

describe('AvatarMemberComponent', () => {
  let component: AvatarMemberComponent;
  let fixture: ComponentFixture<AvatarMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
