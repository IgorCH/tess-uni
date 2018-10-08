import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {AboutRoutingModule} from './about-routing.module';
import {SharedComponentsModule} from "../../components/shared-components.module";

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
      SharedComponentsModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
