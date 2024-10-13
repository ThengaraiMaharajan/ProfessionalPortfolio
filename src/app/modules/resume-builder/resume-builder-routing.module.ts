import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeBuildsComponent } from './components/resume-builds/resume-builds.component';

const routes: Routes = [
  {
    path : '',
    component : ResumeBuildsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResumeBuilderRoutingModule { }
