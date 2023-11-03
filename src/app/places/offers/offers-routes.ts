import { Routes } from '@angular/router';


export const OFFERS_ROUTES:Routes = [
    {
        path:'',
        loadComponent: () => import('./offers.page').then( m => m.OffersPage ) 
    },
    {
        path:'new',
        loadComponent: () => import('./new-offer/new-offer.page').then( m => m.NewOfferPage)
    },
    {
        path:'edit/:placeId',
        loadComponent: () => import('./edit-offer/edit-offer.page').then( m => m.EditOfferPage )
    },
    {
        path:':placeId',
        loadComponent: () => import('./offer-bookings/offer-bookings.page').then( m => m.OfferBookingsPage )
    }
]