import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DsService } from './ds.service';
import {UtilsService} from './utils.service';
import {SOAPService} from './soap.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  ],
  providers: [
    SOAPService,
    UtilsService,
    DsService
  ],
  exports: [
  ]
})
export class ServicesModule { }
