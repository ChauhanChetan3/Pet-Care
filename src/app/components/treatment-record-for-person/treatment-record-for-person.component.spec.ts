import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentRecordForPersonComponent } from './treatment-record-for-person.component';

describe('TreatmentRecordForPersonComponent', () => {
  let component: TreatmentRecordForPersonComponent;
  let fixture: ComponentFixture<TreatmentRecordForPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatmentRecordForPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentRecordForPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
