import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CheckComponent} from '../../components/check-places/check.component';
import {ServicesModule} from '../../services/services.module';
import {SharedComponentsModule} from "../../components/shared-components.module";

@NgModule({
  imports: [
    NgSelectModule,
    NgbModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ServicesModule,
      SharedComponentsModule
  ],
  declarations: [
    HomeComponent,
    CheckComponent
  ],
  entryComponents: [
    CheckComponent
  ],
  providers: [
  ]
})
export class HomeModule { }
