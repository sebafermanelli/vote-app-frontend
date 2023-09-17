import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVotingComponent } from './manage-voting.component';

describe('ManageVotingComponent', () => {
  let component: ManageVotingComponent;
  let fixture: ComponentFixture<ManageVotingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageVotingComponent]
    });
    fixture = TestBed.createComponent(ManageVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
