import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeLineTrackerRoutingModule } from './time-line-tracker-routing.module';
import { TimeLinesComponent } from './components/time-lines/time-lines.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TimeLinesComponent
  ],
  imports: [
    CommonModule,
    TimeLineTrackerRoutingModule,
    ReactiveFormsModule
  ]
})
export class TimeLineTrackerModule { }
