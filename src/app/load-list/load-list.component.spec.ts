import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadListComponent } from './load-list.component';

describe('LoadListComponent', () => {
  let component: LoadListComponent;
  let fixture: ComponentFixture<LoadListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadListComponent]
    });
    fixture = TestBed.createComponent(LoadListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
