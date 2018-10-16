import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {AppRoutingModule} from './app-routing.module';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {HotelCardComponent} from './components/hotel-card/hotel-card.component';
import {SearchWidgetComponent} from "./components/search-widget/search-widget.component";
import {SharedComponentsModule} from "./components/shared-components.module";
import {CommonModule} from "@angular/common";
import {NgxGalleryModule} from 'ngx-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HotelCardComponent,
    SearchWidgetComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    NgbModule,
    HttpClientModule,
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    NgxGalleryModule,
    CommonModule,
    AppRoutingModule,
    TransferHttpCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
