import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalPortfolioRoutingModule } from './professional-portfolio-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { ProjectsComponent } from './components/projects/projects.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProfessionalPortfolioRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule
  ]
})
export class ProfessionalPortfolioModule { }
