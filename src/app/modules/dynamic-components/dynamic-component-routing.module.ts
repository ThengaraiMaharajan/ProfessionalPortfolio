import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { DynamicTablesComponent } from './components/dynamic-tables/dynamic-tables.component';
import { DynamicDashboardsComponent } from './components/dynamic-dashboards/dynamic-dashboards.component';

DynamicFormsComponent
DynamicTablesComponent
DynamicDashboardsComponent

const routes: Routes = [
  {
    path : 'forms',
    component : DynamicFormsComponent,
  },
  {
    path : 'tables',
    component : DynamicTablesComponent,
  },
  {
    path : 'dashboards',
    component : DynamicDashboardsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicComponentRoutingModule { }
