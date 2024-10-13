import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { DynamicFormCreateComponent } from './components/dynamic-form-create/dynamic-form-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DynamicFormCreateComponent
  ],
  imports: [
    CommonModule,
    DynamicFormsRoutingModule,
    ReactiveFormsModule
  ]
})
export class DynamicFormsModule { }
