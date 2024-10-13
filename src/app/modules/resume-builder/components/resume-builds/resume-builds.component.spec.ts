import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeBuildsComponent } from './resume-builds.component';

describe('ResumeBuildsComponent', () => {
  let component: ResumeBuildsComponent;
  let fixture: ComponentFixture<ResumeBuildsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeBuildsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeBuildsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
