import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectSenderComponent } from './subject-sender.component';

describe('SubjectSenderComponent', () => {
  let component: SubjectSenderComponent;
  let fixture: ComponentFixture<SubjectSenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectSenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
