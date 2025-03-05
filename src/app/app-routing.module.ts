import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path : 'dynamic-forms',
    loadChildren : () => import('./modules/dynamic-forms/dynamic-forms.module').then(m => m.DynamicFormsModule)
  },
  {
    path : 'time-lines-tracker',
    loadChildren : () => import('./modules/time-line-tracker/time-line-tracker.module').then(m => m.TimeLineTrackerModule)
  },
  {
    path : 'resume-builder',
    loadChildren : () => import('./modules/resume-builder/resume-builder.module').then(m => m.ResumeBuilderModule)
  },
  {
    path : 'home',
    loadChildren : () => import('./modules/professional-portfolio/professional-portfolio.module').then(m => m.ProfessionalPortfolioModule)
  },
  {
    path: '**',  // Wildcard route for any unmatched URL
    redirectTo: 'home'  // Redirect to profile
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
