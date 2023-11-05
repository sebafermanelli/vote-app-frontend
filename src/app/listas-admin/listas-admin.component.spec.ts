import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListasAdminComponent } from './listas-admin.component';

describe('ListasAdminComponent', () => {
  let component: ListasAdminComponent;
  let fixture: ComponentFixture<ListasAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListasAdminComponent]
    });
    fixture = TestBed.createComponent(ListasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
