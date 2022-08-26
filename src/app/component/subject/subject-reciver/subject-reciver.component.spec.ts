import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectReciverComponent } from './subject-reciver.component';

describe('SubjectReciverComponent', () => {
  let component: SubjectReciverComponent;
  let fixture: ComponentFixture<SubjectReciverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectReciverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectReciverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
