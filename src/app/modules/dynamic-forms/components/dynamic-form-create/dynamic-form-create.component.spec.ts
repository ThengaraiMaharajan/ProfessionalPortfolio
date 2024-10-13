import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormCreateComponent } from './dynamic-form-create.component';

describe('DynamicFormCreateComponent', () => {
  let component: DynamicFormCreateComponent;
  let fixture: ComponentFixture<DynamicFormCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
