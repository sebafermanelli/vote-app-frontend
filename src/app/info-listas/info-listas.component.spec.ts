import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoListasComponent } from './info-listas.component';

describe('InfoListasComponent', () => {
  let component: InfoListasComponent;
  let fixture: ComponentFixture<InfoListasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoListasComponent]
    });
    fixture = TestBed.createComponent(InfoListasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
