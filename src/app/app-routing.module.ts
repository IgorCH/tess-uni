import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
  { path: 'booking', loadChildren: './pages/booking/booking.module#BookingModule'},
  { path: 'crimea', loadChildren: './pages/crimea/crimea.module#CrimeaModule'},
  { path: 'hotel-info', loadChildren: './pages/hotel-info/hotel-info.module#HotelInfoModule'},
  { path: 'check-order', loadChildren: './pages/check-order/check-order.module#CheckOrderModule'},
  { path: 'contacts', loadChildren: './pages/contacts/contacts.module#ContactsModule'},
  { path: 'partners', loadChildren: './pages/partners/partners.module#PartnersModule'},
  { path: 'about', loadChildren: './pages/about/about.module#AboutModule'},
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
