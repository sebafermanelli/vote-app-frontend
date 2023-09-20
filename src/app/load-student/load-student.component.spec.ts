import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadStudentComponent } from './load-student.component';

describe('LoadStudentComponent', () => {
  let component: LoadStudentComponent;
  let fixture: ComponentFixture<LoadStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadStudentComponent]
    });
    fixture = TestBed.createComponent(LoadStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
