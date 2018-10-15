import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelsRoutingModule} from './hotels-routing.module';
import {HotelsComponent} from './hotels.component';

@NgModule({
  imports: [
    CommonModule,
    HotelsRoutingModule
  ],
  declarations: [
    HotelsComponent
  ]
})
export class HotelsModule { }




