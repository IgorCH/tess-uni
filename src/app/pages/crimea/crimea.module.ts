import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CrimeaComponent} from './crimea.component';
import {CrimeaRoutingModule} from './crimea-routing.module';
import {SharedComponentsModule} from "../../components/shared-components.module";

@NgModule({
  imports: [
    NgSelectModule,
    NgbModule,
    CommonModule,
    FormsModule,
    CrimeaRoutingModule,
      SharedComponentsModule
  ],
  declarations: [
    CrimeaComponent
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class CrimeaModule { }
