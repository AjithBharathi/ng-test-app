import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RBasicFormComponent } from './r-basic-form/r-basic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RBasicFormBuilderComponent } from './r-basic-form-builder/r-basic-form-builder.component';
import { RFb2Component } from './r-fb2/r-fb2.component';

const routes:Routes = [
  { path: 'r-basic-form', component: RBasicFormComponent },
  { path: 'r-basic-form-builder', component: RBasicFormBuilderComponent },
  { path: 'r-fb2', component: RFb2Component },
  {
    path: '',
    redirectTo: 'r-fb2',
    pathMatch: 'prefix'
  },
];


@NgModule({
  declarations: [
    RBasicFormComponent,
    RBasicFormBuilderComponent,
    RFb2Component, // dynamic validatiors with form builder
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class FormsReactiveModule { }
