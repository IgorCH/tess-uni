import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookingComponent} from './booking.component';

const routes: Routes = [
  { path: '', component: BookingComponent, data: {  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BookingRoutingModule { }
