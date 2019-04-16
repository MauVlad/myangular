import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarConceptComponent } from './avatar-concept.component';

describe('AvatarConceptComponent', () => {
  let component: AvatarConceptComponent;
  let fixture: ComponentFixture<AvatarConceptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarConceptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
