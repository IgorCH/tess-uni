import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TangerComponent} from './tanger.component';
import {TangerRoutingModule} from './tanger-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TangerRoutingModule
  ],
  declarations: [
    TangerComponent
  ]
})
export class TangerModule { }
