import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelInfoRoutingModule} from './hotel-info-routing.module';
import {HotelInfoComponent} from './hotel-info.component';

@NgModule({
  imports: [
    CommonModule,
    HotelInfoRoutingModule
  ],
  declarations: [
    HotelInfoComponent
  ]
})
export class HotelInfoModule { }
