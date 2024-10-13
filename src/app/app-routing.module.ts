import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : 'dynamicForms',
    loadChildren : () => import('./modules/dynamic-forms/dynamic-forms.module').then(m => m.DynamicFormsModule)
  },
  {
    path : 'timeLines',
    loadChildren : () => import('./modules/time-line-tracker/time-line-tracker.module').then(m => m.TimeLineTrackerModule)
  },
  {
    path : 'resumeBuilder',
    loadChildren : () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
