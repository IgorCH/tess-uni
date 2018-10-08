import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrimeaComponent } from './crimea.component';

const routes: Routes = [
  { path: '', component: CrimeaComponent, data: {  } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CrimeaRoutingModule { }
