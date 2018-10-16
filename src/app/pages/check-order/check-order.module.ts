import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckOrderRoutingModule} from './check-order-routing.module';
import {CheckOrderComponent} from './check-order.component';
import {ServicesModule} from '../../services/services.module';

@NgModule({
  imports: [
    CommonModule,
    CheckOrderRoutingModule,
    ServicesModule
  ],
  declarations: [
    CheckOrderComponent
  ]
})
export class CheckOrderModule { }




