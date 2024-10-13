import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeLinesComponent } from './components/time-lines/time-lines.component';

const routes: Routes = [
  {
    path : '',
    component : TimeLinesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeLineTrackerRoutingModule { }
