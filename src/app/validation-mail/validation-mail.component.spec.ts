import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationMailComponent } from './validation-mail.component';

describe('ValidationMailComponent', () => {
  let component: ValidationMailComponent;
  let fixture: ComponentFixture<ValidationMailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationMailComponent]
    });
    fixture = TestBed.createComponent(ValidationMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
