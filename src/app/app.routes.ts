import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'places',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadComponent: () => import('./auth/auth.page').then( m => m.AuthPage)
  },
  {
    path: 'places',
    canLoad: [AuthGuard],
    loadChildren: () => import('./places/places-routes').then( m => m.PLACES_ROUTES)
  },
  {
    path: 'bookings',
    canLoad: [AuthGuard],
    loadComponent: () => import('./bookings/bookings.page').then( m => m.BookingsPage)
  },
  {
    path: 'create-booking',
    loadComponent: () => import('./bookings/create-booking/create-booking.page').then( m => m.CreateBookingPage)
  },
  // {
  //   path: 'offers',
  //   loadComponent: () => import('./places/offers/offers.page').then( m => m.OffersPage)
  // },
  // {
  //   path: 'new-offer',
  //   loadComponent: () => import('./places/offers/new-offer/new-offer.page').then( m => m.NewOfferPage)
  // },
  // {
  //   path: 'discover',
  //   loadComponent: () => import('./places/discover/discover.page').then( m => m.DiscoverPage)
  // },
  // {
  //   path: 'edit-offer',
  //   loadComponent: () => import('./places/offers/edit-offer/edit-offer.page').then( m => m.EditOfferPage)
  // },
  // {
  //   path: 'place-detail',
  //   loadComponent: () => import('./places/discover/place-detail/place-detail.page').then( m => m.PlaceDetailPage)
  // },
  // {
  //   path: 'offer-bookings',
  //   loadComponent: () => import('./places/offers/offer-bookings/offer-bookings.page').then( m => m.OfferBookingsPage)
  // },
  // {
  //   path: 'bookings',
  //   loadComponent: () => import('./bookings/bookings.page').then( m => m.BookingsPage)
  // }
];
