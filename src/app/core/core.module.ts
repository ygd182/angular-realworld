import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseClassDirective } from '../shared/directives/base-class.directive';


@NgModule({
  declarations: [
    BaseClassDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: []
})
export class CoreModule { }
