import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResumeBuilderRoutingModule } from './resume-builder-routing.module';
import { ResumeBuildsComponent } from './components/resume-builds/resume-builds.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ResumeBuildsComponent
  ],
  imports: [
    CommonModule,
    ResumeBuilderRoutingModule,
    ReactiveFormsModule
  ]
})
export class ResumeBuilderModule { }
