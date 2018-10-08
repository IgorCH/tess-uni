import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CabinetComponent} from './cabinet.component';

@NgModule({
  imports: [
    NgSelectModule,
    NgbModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    CabinetComponent
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class CabinetModule { }
