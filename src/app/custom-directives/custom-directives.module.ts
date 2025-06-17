import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomDirectivesRoutingModule } from './custom-directives-routing.module';
import { AddClassDirective, AutoFocusDirective, ClickOutsideDirective, CustomDirectiveDirective, DebounceClickDirective, HasRoleDirective, HighlightDirective } from './custom-directive.directive';
import { CustomComponent } from './custom/custom.component';


@NgModule({
  declarations: [
    CustomDirectiveDirective,
    CustomComponent,
    HighlightDirective,
    AutoFocusDirective,
    ClickOutsideDirective,
    HasRoleDirective,
    DebounceClickDirective,
    AddClassDirective
  ],
  imports: [
    CommonModule,
    CustomDirectivesRoutingModule
  ]
})
export class CustomDirectivesModule { }
