import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalPortfolioRoutingModule } from './professional-portfolio-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfessionalPortfolioRoutingModule,
    HttpClientModule
  ]
})
export class ProfessionalPortfolioModule { }
