import {NgModule} from '@angular/core';
import {ManagersComponent} from './managers/managers.component';
import {ObjectsComponent} from './objects/objects.component';
import { ObjectsWidgetComponent } from './objects-widget/objects-widget.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ManagersComponent,
        ObjectsComponent,
        ObjectsWidgetComponent
    ],
    exports: [
        ManagersComponent,
        ObjectsComponent,
        ObjectsWidgetComponent
    ]
})
export class SharedComponentsModule {
}
