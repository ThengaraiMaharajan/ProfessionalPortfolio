import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateSummaryDialogComponent } from './generate-summary-dialog.component';

describe('GenerateSummaryDialogComponent', () => {
  let component: GenerateSummaryDialogComponent;
  let fixture: ComponentFixture<GenerateSummaryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerateSummaryDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateSummaryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
