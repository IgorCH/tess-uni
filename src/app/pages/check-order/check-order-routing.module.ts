import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOrderComponent } from './check-order.component';

const routes: Routes = [
  { path: '', component: CheckOrderComponent, data: {  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CheckOrderRoutingModule { }
