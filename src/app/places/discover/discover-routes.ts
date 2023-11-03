import { Routes } from "@angular/router";

export const DISCOVER_ROUTES: Routes = [
    {
        path:'',
        loadComponent: () => import('./discover.page').then( m => m.DiscoverPage)
    },
    {
        path:':placeId',
        loadComponent: () => import('./place-detail/place-detail.page').then( m => m.PlaceDetailPage)
    }
]