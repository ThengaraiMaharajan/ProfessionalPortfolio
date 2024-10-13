import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormCreateComponent } from './components/dynamic-form-create/dynamic-form-create.component';

const routes: Routes = [
  {
    path : '' , component : DynamicFormCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormsRoutingModule { }
