import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlassLayerComponent } from './glass-layer.component';

describe('GlassLayerComponent', () => {
  let component: GlassLayerComponent;
  let fixture: ComponentFixture<GlassLayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlassLayerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlassLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
