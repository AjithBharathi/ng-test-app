import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { RBasicFormComponent } from './r-basic-form/r-basic-form.component';
import { RBasicFormBuilderComponent } from './r-basic-form-builder/r-basic-form-builder.component';
import { RFb2Component } from './r-fb2/r-fb2.component';
import { RBasicFormArrayComponent } from './r-basic-form-array/r-basic-form-array.component';
import { RFormArray2Component } from './r-form-array2/r-form-array2.component';
import { RFormArray3Component } from './r-form-array3/r-form-array3.component';

const routes:Routes = [
  { path: 'r-basic-form', component: RBasicFormComponent },
  { path: 'r-basic-form-builder', component: RBasicFormBuilderComponent },
  { path: 'r-fb2', component: RFb2Component },
  { path: 'r-basic-form-array', component: RBasicFormArrayComponent },
  { path: 'r-form-array2', component: RFormArray2Component },
  { path: 'r-form-array3', component: RFormArray3Component },
  {
    path: '',
    redirectTo: 'r-form-array2',
    pathMatch: 'prefix'
  },
];


@NgModule({
  declarations: [
    RBasicFormComponent,
    RBasicFormBuilderComponent,
    RFb2Component,
    RBasicFormArrayComponent,
    RFormArray2Component,
    RFormArray3Component, // dynamic validatiors with form builder
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormsReactiveModule { }
