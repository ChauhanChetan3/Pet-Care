import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedhomeComponent } from './loggedhome.component';

describe('LoggedhomeComponent', () => {
  let component: LoggedhomeComponent;
  let fixture: ComponentFixture<LoggedhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
