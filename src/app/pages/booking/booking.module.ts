import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingComponent} from './booking.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgSelectModule} from '@ng-select/ng-select';
import {BookingRoutingModule} from './booking-routing.module';
import {ServicesModule} from '../../services/services.module';

@NgModule({
  imports: [
    NgSelectModule,
    NgbModule,
    CommonModule,
    FormsModule,
    BookingRoutingModule,
    ServicesModule
  ],
  declarations: [
    BookingComponent
  ]
})
export class BookingModule { }
