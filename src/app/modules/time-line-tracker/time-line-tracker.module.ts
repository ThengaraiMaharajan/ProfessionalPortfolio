import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeLineTrackerRoutingModule } from './time-line-tracker-routing.module';
import { TimeLinesComponent } from './components/time-lines/time-lines.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
@NgModule({
  declarations: [
    TimeLinesComponent
  ],
  imports: [
    CommonModule,
    TimeLineTrackerRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ]
})
export class TimeLineTrackerModule { }
