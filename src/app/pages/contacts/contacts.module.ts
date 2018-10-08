import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ContactsComponent} from './contacts.component';
import {ContactsRoutingModule} from './contacts-routing.module';

@NgModule({
  imports: [
    NgSelectModule,
    NgbModule,
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ],
  declarations: [
    ContactsComponent
  ],
  entryComponents: [
  ],
  providers: [
  ]
})
export class ContactsModule { }
