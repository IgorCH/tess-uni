import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TangerComponent } from './tanger.component';

const routes: Routes = [
  { path: '', component: TangerComponent, data: {  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class TangerRoutingModule { }
