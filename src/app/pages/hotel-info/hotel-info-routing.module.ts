import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelInfoComponent } from './hotel-info.component';

const routes: Routes = [
  { path: '', component: HotelInfoComponent, data: {  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HotelInfoRoutingModule { }
