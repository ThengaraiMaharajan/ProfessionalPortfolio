import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatButtonModule } from '@angular/material/button'; 
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { RemarkModule } from 'ngx-remark';
import { MatrixRainComponent } from './sharedComponents/matrix-rain/matrix-rain.component';

@NgModule({
  declarations: [
    AppComponent,
    MatrixRainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    RemarkModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
