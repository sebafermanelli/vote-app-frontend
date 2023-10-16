import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionElectionUserComponent } from './selection-election-user.component';

describe('SelectionElectionUserComponent', () => {
  let component: SelectionElectionUserComponent;
  let fixture: ComponentFixture<SelectionElectionUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectionElectionUserComponent]
    });
    fixture = TestBed.createComponent(SelectionElectionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
