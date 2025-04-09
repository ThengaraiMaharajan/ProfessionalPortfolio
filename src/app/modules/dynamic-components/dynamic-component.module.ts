import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { DynamicTablesComponent } from './components/dynamic-tables/dynamic-tables.component';
import { DynamicDashboardsComponent } from './components/dynamic-dashboards/dynamic-dashboards.component';
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';


@NgModule({
  declarations: [
    DynamicTablesComponent,
    DynamicDashboardsComponent,
    DynamicFormsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    DynamicComponentRoutingModule
  ]
})
export class DynamicComponentModule { }
