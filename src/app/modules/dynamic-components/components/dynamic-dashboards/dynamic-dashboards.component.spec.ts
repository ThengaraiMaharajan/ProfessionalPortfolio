import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicDashboardsComponent } from './dynamic-dashboards.component';

describe('DynamicDashboardsComponent', () => {
  let component: DynamicDashboardsComponent;
  let fixture: ComponentFixture<DynamicDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicDashboardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
