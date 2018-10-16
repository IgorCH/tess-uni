import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HotelInfoRoutingModule} from './hotel-info-routing.module';
import {HotelInfoComponent} from './hotel-info.component';
import {ServicesModule} from '../../services/services.module';
import {NgxGalleryModule} from 'ngx-gallery';
import {SafeHtmlPipe} from '../../pipes/safe.pipe';

@NgModule({
  imports: [
    CommonModule,
    HotelInfoRoutingModule,
    ServicesModule,
    NgxGalleryModule
  ],
  declarations: [
    HotelInfoComponent,
    SafeHtmlPipe
  ]
})
export class HotelInfoModule { }
